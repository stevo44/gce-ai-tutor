import React, { useState, useRef } from 'react';
import useAuth from '../../hooks/useAuth';

const ProfileSettings = () => {
    const { currentUser, updateUserProfile, updateUserEmail, updateUserPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Form refs
    const displayNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        const promises = [];
        setLoading(true);

        // Update Display Name
        if (displayNameRef.current.value !== currentUser.displayName) {
            promises.push(updateUserProfile({ displayName: displayNameRef.current.value }));
        }

        // Update Email
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateUserEmail(emailRef.current.value));
        }

        // Update Password
        if (passwordRef.current.value) {
            if (passwordRef.current.value !== passwordConfirmRef.current.value) {
                setMessage({ type: 'error', text: 'Passwords do not match' });
                setLoading(false);
                return;
            }
            promises.push(updateUserPassword(passwordRef.current.value));
        }

        Promise.all(promises)
            .then(() => {
                setMessage({ type: 'success', text: 'Profile updated successfully' });
            })
            .catch((error) => {
                setMessage({ type: 'error', text: 'Failed to update profile: ' + error.message });
            })
            .finally(() => {
                setLoading(false);
                // Clear password fields
                if (passwordRef.current) passwordRef.current.value = '';
                if (passwordConfirmRef.current) passwordConfirmRef.current.value = '';
            });
    };

    return (
        <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/5">
            <h3 className="text-xl font-bold text-charcoal dark:text-white mb-6">Profile Settings</h3>

            {message.text && (
                <div className={`p-4 rounded-lg mb-6 ${message.type === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Display Name
                    </label>
                    <input
                        type="text"
                        ref={displayNameRef}
                        defaultValue={currentUser?.displayName}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-charcoal dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        ref={emailRef}
                        defaultValue={currentUser?.email}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-charcoal dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Change Password</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                ref={passwordRef}
                                placeholder="Leave blank to keep current"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-charcoal dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="Confirm new password"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-charcoal dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;
