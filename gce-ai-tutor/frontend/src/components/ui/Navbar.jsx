import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ variant = 'default' }) => {
    // Default navbar for authenticated/dashboard views
    if (variant === 'sidebar') {
        return (
            <aside className="w-64 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between p-4 shrink-0">
                <div className="flex flex-col gap-8">
                    <Link to="/dashboard" className="flex items-center gap-3 px-2">
                        <div className="bg-primary rounded-lg p-2 text-white">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div>
                            <h1 className="text-primary dark:text-white text-base font-bold leading-tight">GCE Master</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Prep 2024</p>
                        </div>
                    </Link>
                    <nav className="flex flex-col gap-2">
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-semibold" to="/dashboard">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm">Dashboard</span>
                        </Link>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="/topics">
                            <span className="material-symbols-outlined">book</span>
                            <span className="text-sm font-medium">Topic Mastery</span>
                        </Link>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="/quiz">
                            <span className="material-symbols-outlined">quiz</span>
                            <span className="text-sm font-medium">Practice Quizzes</span>
                        </Link>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="/chat">
                            <span className="material-symbols-outlined">smart_toy</span>
                            <span className="text-sm font-medium">AI Tutor</span>
                        </Link>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="/insights">
                            <span className="material-symbols-outlined">insights</span>
                            <span className="text-sm font-medium">Insights</span>
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
                        <p className="text-xs font-bold text-primary uppercase tracking-wider">Plan Status</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500">72% Syllabus covered</p>
                    </div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">event_note</span>
                        <span>Study Planner</span>
                    </button>
                </div>
            </aside>
        );
    }

    // Simple header navbar for landing/auth pages
    return (
        <header className="sticky top-0 z-50 w-full border-b border-solid border-[#eae9f1] dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-20 lg:px-40 py-3">
            <div className="flex items-center justify-between max-w-[1200px] mx-auto">
                <Link to="/" className="flex items-center gap-4">
                    <div className="text-primary size-6">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#101910] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">GCE Prep</h2>
                </Link>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <nav className="hidden md:flex items-center gap-9">
                        <a className="text-[#101910] dark:text-white/80 text-sm font-medium hover:text-primary transition-colors" href="#features">Features</a>
                        <a className="text-[#101910] dark:text-white/80 text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
                        <Link className="text-[#101910] dark:text-white/80 text-sm font-medium hover:text-primary transition-colors" to="/login">Login</Link>
                    </nav>
                    <Link to="/register">
                        <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 text-sm font-bold leading-normal tracking-[0.015em] transition-all bg-primary text-white hover:opacity-90">
                            <span className="truncate">Get Started</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
