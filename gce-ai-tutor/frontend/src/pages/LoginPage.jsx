import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/ui/Navbar';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login, error: authError } = useAuth();

    // Form State
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const formFields = [
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'name@example.com',
            icon: 'mail'
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '••••••••',
            icon: 'lock',
            helperLink: {
                text: 'Forgot?',
                href: '#'
            }
        }
    ];

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(formData.email, formData.password);
            // Redirect to destination or dashboard
            const destination = location.state?.from || '/dashboard';
            navigate(destination);
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-300">
            <Navbar />

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
                        onSubmit={handleSubmit}
                        error={error || authError}
                        loading={loading}
                        formData={formData}
                        onFieldChange={handleFieldChange}
                    />

                    <div className="mt-8 flex justify-center gap-6 text-gray-400 text-xs">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 right-0 p-8 opacity-5 pointer-events-none select-none">
                <span className="material-symbols-outlined text-[200px]">auto_stories</span>
            </div>
        </div>
    );
};

export default LoginPage;
