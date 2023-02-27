import React from 'react';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    getIdToken
} from "firebase/auth";
import initializeFirebase from '../pages/Authentication/Firebase/firebase.init';
import { userAPI } from '../utils/API';
import redirect from '../utils/redirect';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = React.useState(null);
    const [admin, setAdmin] = React.useState(false);
    const [authError, setAuthError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    // getting auth
    const auth = getAuth();

    // observer user state
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (!user) {
                    throw new Error('User not found!');
                }

                const token = await getIdToken(user);
                sessionStorage.setItem('__idToken', token);
                setUser(user);
            } catch (error) {
                sessionStorage.removeItem('__idToken');
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth]);

    // observer admin state
    React.useEffect(() => {
        if (user?.email) {
            userAPI.get(`/email/${user.email}`).then(res => {
                const role = res.data.data.role;
                setAdmin(role === 'admin');
            });
        }
    }, [user?.email]);

    // auth error observer
    React.useEffect(() => {
        if (authError) {
            window.alert(authError);
            setAuthError('');
        }
    }, [authError]);

    // register user
    const register = (newUser, history, to) => {
        setIsLoading(true);
        const { name, email, password } = newUser;
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                try {
                    // update user information to firebase
                    await updateProfile(auth.currentUser, { displayName: name });

                    // update user information to website database
                    const newUserData = { ...newUser };
                    delete newUserData.password;
                    await userAPI.post(newUserData);
                    redirect(history, to);
                } catch (error) {
                    setAuthError(error.message);
                }
            })
            .catch(error => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    }

    // login user
    const logIn = (email, password, history, to) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // user log-in
                redirect(history, to);
            })
            .catch(error => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    }

    // logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // user sign-out
            })
            .catch(error => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    }

    return { user, admin, isLoading, register, logIn, logOut };
};

export default useFirebase;