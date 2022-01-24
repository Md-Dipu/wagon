import React from 'react';
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import redirect from '../Utilities/redirect';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = React.useState(null);

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
        });
        return () => unsubscribe;
    }, [auth]);

    // register user
    const register = (newUser, history, to) => {
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
            .catch(console.error);
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
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // user log-in
                redirect(history, to);
            })
            .catch(console.error);
    }

    // logout user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // user sign-out
            })
            .catch(console.error);
    }

    return { user, register, logIn, logOut };
};

export default useFirebase;