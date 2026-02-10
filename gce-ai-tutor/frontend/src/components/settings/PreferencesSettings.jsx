import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const AVAILABLE_SUBJECTS = [
    { id: 'math', name: 'Mathematics', icon: 'functions' },
    { id: 'physics', name: 'Physics', icon: 'science' },
    { id: 'chemistry', name: 'Chemistry', icon: 'biotech' },
    { id: 'biology', name: 'Biology', icon: 'coronavirus' },
    { id: 'economics', name: 'Economics', icon: 'trending_up' },
    { id: 'cs', name: 'Computer Science', icon: 'computer' },
];

const PreferencesSettings = () => {
    const { theme, toggleTheme } = useTheme();

    // Notifications State (Persisted in LocalStorage)
    const [notifications, setNotifications] = useState(() => {
        const saved = localStorage.getItem('gce_prep_notifications');
        return saved ? JSON.parse(saved) : {
            email: true,
            push: true,
            reminders: false
        };
    });

    // Subjects State (Persisted in LocalStorage)
    const [selectedSubjects, setSelectedSubjects] = useState(() => {
        const saved = localStorage.getItem('gce_prep_subjects');
        return saved ? JSON.parse(saved) : ['math', 'chemistry'];
    });

    const [saveMessage, setSaveMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('gce_prep_notifications', JSON.stringify(notifications));
    }, [notifications]);

    useEffect(() => {
        localStorage.setItem('gce_prep_subjects', JSON.stringify(selectedSubjects));
    }, [selectedSubjects]);

    const handleNotificationChange = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
        showSaveMessage();
    };

    const handleSubjectToggle = (id) => {
        setSelectedSubjects(prev => {
            if (prev.includes(id)) {
                return prev.filter(s => s !== id);
            } else {
                return [...prev, id];
            }
        });
        showSaveMessage();
    };

    const showSaveMessage = () => {
        setSaveMessage('Preference saved');
        setTimeout(() => setSaveMessage(''), 2000);
    };

    return (
        <div className="space-y-6">
            {/* Appearance Section */}
            <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/5">
                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-6">Appearance</h3>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">{theme === 'dark' ? 'dark_mode' : 'light_mode'}</span>
                        </div>
                        <div>
                            <div className="font-bold text-charcoal dark:text-white">Dark Mode</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Reduce eye strain at night</div>
                        </div>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${theme === 'dark' ? 'bg-primary' : 'bg-gray-200'}`}
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-charcoal dark:text-white">Notifications</h3>
                    {saveMessage && <span className="text-sm text-green-600 dark:text-green-400 fade-in">{saveMessage}</span>}
                </div>

                <div className="space-y-4">
                    {Object.entries({
                        email: { label: 'Email Notifications', desc: 'Receive updates about your progress via email' },
                        push: { label: 'Push Notifications', desc: 'Get notified about new quizzes and topics' },
                        reminders: { label: 'Study Reminders', desc: 'Daily reminders to keep your streak correctly' }
                    }).map(([key, config]) => (
                        <div key={key} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <div>
                                <div className="font-bold text-charcoal dark:text-white">{config.label}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{config.desc}</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications[key]}
                                    onChange={() => handleNotificationChange(key)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subjects Section */}
            <div className="bg-white dark:bg-background-dark/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-white/5">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-charcoal dark:text-white">My Subjects</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {AVAILABLE_SUBJECTS.map(subject => (
                        <button
                            key={subject.id}
                            onClick={() => handleSubjectToggle(subject.id)}
                            className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${selectedSubjects.includes(subject.id)
                                    ? 'bg-primary/5 border-primary text-primary'
                                    : 'bg-gray-50 dark:bg-gray-800/50 border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
                            <span className="font-bold">{subject.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreferencesSettings;
