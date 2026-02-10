import React, { useState } from 'react';
import ProfileSettings from '../components/settings/ProfileSettings';
import PreferencesSettings from '../components/settings/PreferencesSettings';
import useAuth from '../hooks/useAuth';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const { logout } = useAuth();

    const tabs = [
        { id: 'profile', label: 'Profile', icon: 'person' },
        { id: 'preferences', label: 'Preferences', icon: 'tune' },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal dark:text-white">Settings</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your account and preferences</p>
                </div>
            </div>

            {/* Mobile Tabs */}
            <div className="flex md:hidden overflow-x-auto pb-2 gap-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'bg-white dark:bg-white/5 text-gray-500 hover:bg-gray-50 dark:hover:bg-white/10'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation (Desktop) */}
                <div className="hidden md:flex flex-col w-64 shrink-0 gap-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${activeTab === tab.id
                                    ? 'bg-white dark:bg-background-dark/50 text-primary shadow-sm border border-gray-100 dark:border-white/5 font-bold'
                                    : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-charcoal dark:hover:text-white'
                                }`}
                        >
                            <span className="material-symbols-outlined">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}

                    <div className="h-px bg-gray-200 dark:bg-white/10 my-2 mx-4" />

                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                    >
                        <span className="material-symbols-outlined">logout</span>
                        Sign Out
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                    {activeTab === 'profile' && <ProfileSettings />}
                    {activeTab === 'preferences' && <PreferencesSettings />}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
