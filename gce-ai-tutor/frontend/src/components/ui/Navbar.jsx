import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
    variant = 'default',
    isMobileOpen = false,
    isTabletExpanded = false,
    onCloseMobile = () => { }
}) => {
    // Default navbar for authenticated/dashboard views
    if (variant === 'sidebar') {
        const sidebarClasses = `
            fixed md:static z-40 h-full 
            bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 
            flex flex-col justify-between p-4 shrink-0
            transition-all duration-300 ease-in-out
            overflow-y-auto
            ${isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'}
            lg:w-64
            w-[85%] max-w-[300px]
            ${isTabletExpanded ? 'md:w-64' : 'md:w-20 md:items-center'}
        `;

        const linkLabelClasses = `
            transition-opacity duration-200 whitespace-nowrap
            block
            ${isTabletExpanded ? 'md:block' : 'md:hidden'}
            lg:block
        `;

        const logoClasses = `
            transition-all duration-200
            block
            ${isTabletExpanded ? 'md:block' : 'md:hidden'}
            lg:block
        `;

        return (
            <aside className={sidebarClasses}>
                <div className="flex flex-col gap-8">
                    {/* Logo Area */}
                    <div className={`flex items-center gap-3 px-2 ${!isTabletExpanded && 'md:justify-center lg:justify-start'}`}>
                        <div className="bg-primary rounded-lg p-2 text-white shrink-0">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <div className={logoClasses}>
                            <h1 className="text-primary dark:text-white text-base font-bold leading-tight">GCE Master</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">Prep 2024</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-2">
                        <Link
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${!isTabletExpanded && 'md:justify-center lg:justify-start'} bg-primary/10 text-primary font-semibold`}
                            to="/dashboard"
                            onClick={onCloseMobile}
                        >
                            <span className="material-symbols-outlined shrink-0">dashboard</span>
                            <span className={linkLabelClasses}>Dashboard</span>
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${!isTabletExpanded && 'md:justify-center lg:justify-start'} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                            to="/topics"
                            onClick={onCloseMobile}
                        >
                            <span className="material-symbols-outlined shrink-0">book</span>
                            <span className={linkLabelClasses}>Topic Mastery</span>
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${!isTabletExpanded && 'md:justify-center lg:justify-start'} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                            to="/quiz"
                            onClick={onCloseMobile}
                        >
                            <span className="material-symbols-outlined shrink-0">quiz</span>
                            <span className={linkLabelClasses}>Practice Quizzes</span>
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${!isTabletExpanded && 'md:justify-center lg:justify-start'} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                            to="/chat"
                            onClick={onCloseMobile}
                        >
                            <span className="material-symbols-outlined shrink-0">smart_toy</span>
                            <span className={linkLabelClasses}>AI Tutor</span>
                        </Link>
                        <Link
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${!isTabletExpanded && 'md:justify-center lg:justify-start'} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                            to="/insights"
                            onClick={onCloseMobile}
                        >
                            <span className="material-symbols-outlined shrink-0">insights</span>
                            <span className={linkLabelClasses}>Insights</span>
                        </Link>
                    </nav>
                </div>

                {/* Bottom Stats / Footer */}
                <div className={`flex flex-col gap-4 ${!isTabletExpanded && 'md:hidden lg:flex'}`}>
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
