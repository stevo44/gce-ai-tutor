import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
    const formFields = [
        {
            label: 'Email Address',
            icon: 'alternate_email',
            type: 'email',
            placeholder: 'e.g. alex.student@example.com'
        },
        {
            label: 'Password',
            icon: 'key',
            type: 'password',
            placeholder: '••••••••',
            helperLink: {
                text: 'Forgot password?',
                href: '#'
            }
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9e7f3] dark:border-b-white/10 px-6 md:px-10 py-3 bg-white dark:bg-background-dark/50 backdrop-blur-sm">
                <Link to="/" className="flex items-center gap-4 text-primary">
                    <div className="size-6">
                        <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <h2 className="text-[#100d1b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">GCE Prep</h2>
                </Link>
                <div className="flex items-center gap-6">
                    <Link className="hidden md:block text-charcoal dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
                    <Link className="hidden md:block text-charcoal dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                    <Link to="/register">
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary dark:text-blue-400 text-sm font-bold hover:bg-primary/20 transition-all">
                            <span>Sign Up</span>
                        </button>
                    </Link>
                </div>
            </header>

            {/* Main Content (Centered Login Card) */}
            <main className="flex-1 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-[480px]">
                    <AuthForm
                        title="Continue your GCE preparation."
                        subtitle="Welcome back! Please enter your details."
                        icon="lock_open"
                        fields={formFields}
                        submitText="Log In"
                        footerText="New to GCE Prep?"
                        footerLinkText="Create an account"
                        footerLinkHref="/register"
                    />

                    {/* Secondary Footer Links */}
                    <div className="mt-8 flex justify-center gap-6 text-gray-400 text-xs">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
                    </div>
                </div>
            </main>

            {/* Academic Background Accent */}
            <div className="fixed bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none">
                <span className="material-symbols-outlined text-[200px]">auto_stories</span>
            </div>
        </div>
    );
};

export default LoginPage;
