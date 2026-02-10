import React, { createContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const register = async (email, password, displayName) => {
        try {
            setError(null);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (displayName) {
                await updateProfile(userCredential.user, {
                    displayName: displayName
                });
            }

            return userCredential.user;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const login = async (email, password) => {
        try {
            setError(null);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const logout = async () => {
        try {
            setError(null);
            await signOut(auth);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const resetPassword = async (email) => {
        try {
            setError(null);
            await sendPasswordResetEmail(auth, email);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loading,
        error,
        register,
        login,
        logout,
        resetPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
