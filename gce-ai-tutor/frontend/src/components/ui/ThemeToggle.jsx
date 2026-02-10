import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <span className="material-symbols-outlined">dark_mode</span>
            ) : (
                <span className="material-symbols-outlined">light_mode</span>
            )}
        </button>
    );
};

export default ThemeToggle;
