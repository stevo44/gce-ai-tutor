import React, { createContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
    updateEmail,
    updatePassword
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

    const updateUserProfile = async (data) => {
        try {
            setError(null);
            await updateProfile(auth.currentUser, data);
            // Force refresh user state if needed, or rely on onAuthStateChanged
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const updateUserEmail = async (email) => {
        try {
            setError(null);
            await updateEmail(auth.currentUser, email);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const updateUserPassword = async (password) => {
        try {
            setError(null);
            await updatePassword(auth.currentUser, password);
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
        logout,
        resetPassword,
        updateUserProfile,
        updateUserEmail,
        updateUserPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
