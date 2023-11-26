/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();


const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null )
    const [ loading, setLoading ] = useState( true );

    const auth = getAuth( app );
    const googleAuth = new GoogleAuthProvider()


    
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).catch((error) => {
            console.error("Error updating profile:", error);
        });
    };

    
    // social login
    const googleLogin = () => {
        setLoading( true );
        return signInWithPopup( auth, googleAuth );
    }

    // user singIN
    const singInUser = ( email, password ) => {
        setLoading( true )
        return signInWithEmailAndPassword( auth, email, password );
    }

    // user singOut
    const singOut = () => {
        return signOut( auth );
    }


    const createUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword( auth, email, password );
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, ( currentUser ) => {
            setUser( currentUser );
            setLoading( false );
        } )
        return () => {
            return unsubscribe;
        }
    }, [auth] )





    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        googleLogin,
        singInUser,
        singOut,

    }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
}


export default AuthProvider;