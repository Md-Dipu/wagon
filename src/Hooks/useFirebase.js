import React from 'react';
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import redirect from '../Utilities/redirect';

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
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // observer admin state
    React.useEffect(() => {
        fetch(`http://localhost:5000/users/admin/verify?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            .catch(console.error);
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
            .then(() => {
                // update user information to firebase
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        // data updated
                    })
                    .catch(error => {
                        throw new Error(error)
                    });

                // update user information to website database
                const newUserData = { ...newUser };
                delete newUserData.password;
                saveUser(newUserData);
                redirect(history, to);
            })
            .catch(error => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    }

    // save user
    const saveUser = (newUser) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .catch(error => {
                throw new Error(error);
            });
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