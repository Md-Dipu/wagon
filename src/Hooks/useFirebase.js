import React from 'react';
import initializeFirebase from '../Pages/Authentication/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

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
    const register = (newUser) => {
        const { name, email, password, phone } = newUser;
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // update user information to firebase
                updateProfile(auth.currentUser, { displayName: name, phone })
                    .then(() => {
                        // data updated
                    })
                    .catch(error => {
                        throw new Error(error)
                    });
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

    return { user, register, logOut };
};

export default useFirebase;