import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const DashboardLayout = () => {
    // State for responsive sidebar, moved from DashboardPage
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isTabletExpanded, setIsTabletExpanded] = useState(false);

    // Close mobile menu when screen resizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setIsTabletExpanded(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        if (window.innerWidth < 768) {
            setIsMobileMenuOpen(!isMobileMenuOpen);
        } else {
            setIsTabletExpanded(!isTabletExpanded);
        }
    };

    // Disable background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    return (
        <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display min-h-screen">
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div className="flex h-screen overflow-hidden">
                <Navbar
                    variant="sidebar"
                    isMobileOpen={isMobileMenuOpen}
                    isTabletExpanded={isTabletExpanded}
                    onCloseMobile={() => setIsMobileMenuOpen(false)}
                />

                <main className={`flex-1 overflow-y-auto relative w-full scroll-smooth ${['/chat', '/quiz'].includes(window.location.pathname) ? 'p-0' : 'p-4 md:p-8 lg:px-12'}`}>
                    <Outlet context={{ toggleSidebar, isMobileMenuOpen, isTabletExpanded }} />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
