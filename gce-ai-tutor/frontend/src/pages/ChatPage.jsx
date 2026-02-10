import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import MessageBubble from '../components/chat/MessageBubble';
import ChatBox from '../components/chat/ChatBox';
import ThemeToggle from '../components/ui/ThemeToggle';

const ChatPage = () => {
    const { toggleSidebar } = useOutletContext() || {};

    // State management for chat
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentSession, setCurrentSession] = useState('New Chat');

    // TODO: Replace with actual sessions from backend
    const [recentSessions, setRecentSessions] = useState([]);

    // TODO: Replace with dynamic suggestions based on context
    const suggestionChips = [
        "Explain a chemistry concept",
        "Help me with a practice problem",
        "Show me exam tips"
    ];

    // TODO: Implement backend API call
    const handleSendMessage = async (messageText) => {
        // Add user message to chat
        const userMessage = {
            isAI: false,
            avatar: 'U',
            content: messageText,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // TODO: Replace with actual API call to your backend
            // const response = await fetch('/api/chat', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ message: messageText })
            // });
            // const data = await response.json();

            // Placeholder for AI response
            // Remove this when backend is ready
            setTimeout(() => {
                const aiMessage = {
                    isAI: true,
                    title: 'AI Response',
                    content: '<p>Backend integration pending. Your teammate will provide the API endpoint soon.</p>',
                    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                    sources: []
                };
                setMessages(prev => [...prev, aiMessage]);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error sending message:', error);
            setIsLoading(false);
        }
    };

    const handleNewSession = () => {
        setMessages([]);
        setCurrentSession('New Chat');
    };

    return (
        <div className="flex h-full bg-background-light dark:bg-background-dark">
            {/* Internal Sidebar: Recent Topics */}
            {/* Hidden on mobile, handled by logic or just hidden for now to simplify. 
                The original had it as `hidden lg:flex`. We will keep that.
            */}
            <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark hidden lg:flex flex-col">
                <div className="p-4 flex flex-col h-full">
                    <div className="flex flex-col mb-6">
                        <h1 className="text-charcoal dark:text-white text-xs font-bold uppercase tracking-widest mb-4">Recent Sessions</h1>
                        <button
                            onClick={handleNewSession}
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-all mb-4"
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span>Start New Session</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-1">
                        {recentSessions.map((session, index) => (
                            <div
                                key={index}
                                className={`px-3 py-2 flex items-center gap-3 rounded-lg cursor-pointer transition-colors group ${session.active
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-lg ${session.active ? '' : 'text-gray-400'}`}>chat_bubble</span>
                                <span className={`text-sm truncate ${session.active ? 'font-semibold' : 'font-medium'}`}>{session.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-primary cursor-pointer">
                            <span className="material-symbols-outlined text-lg">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-primary cursor-pointer">
                            <span className="material-symbols-outlined text-lg">help_outline</span>
                            <span className="text-sm font-medium">Help Center</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col relative w-full h-[calc(100vh-theme(spacing.0))]">
                {/* Note: the height calc is a bit tricky if we have other headers. 
                DashboardLayout main has flex-1. So this div just needs to fill it. 
                h-full should work if parent has height.
            */}
                {/* Chat Header */}
                <header className="bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between gap-4 sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        {/* Toggle Button for Mobile Main Sidebar */}
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>

                        <div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                                <span className="hover:text-primary">Chemistry</span>
                                <span>/</span>
                                <span className="text-primary">Advanced Level</span>
                            </div>
                            <h2 className="text-charcoal dark:text-white text-lg sm:text-xl font-bold flex items-center gap-2">
                                {currentSession}
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 whitespace-nowrap">Live AI</span>
                            </h2>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-sm">print</span>
                            <span className="hidden md:inline">Print Session</span>
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-sm">auto_stories</span>
                            <span className="hidden md:inline">Textbooks</span>
                        </button>
                        <ThemeToggle />
                    </div>
                </header>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center px-4">
                            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-5xl text-primary">smart_toy</span>
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-3">
                                Welcome to GCE AI Tutor
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
                                Ask me anything about your GCE subjects. I'm here to help you understand concepts, solve problems, and prepare for your exams.
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center max-w-2xl">
                                {suggestionChips.map((chip, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSendMessage(chip)}
                                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-primary/30 text-primary text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            {messages.map((message, index) => (
                                <MessageBubble key={index} message={message} isAI={message.isAI} />
                            ))}

                            {/* Loading Indicator */}
                            {isLoading && (
                                <div className="flex gap-4 max-w-3xl">
                                    <div className="flex-shrink-0">
                                        <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
                                            <span className="material-symbols-outlined">smart_toy</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl rounded-tl-none shadow-sm border border-gray-200 dark:border-gray-700">
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Suggestion Chips - Only show when there are messages */}
                            {!isLoading && (
                                <div className="flex flex-wrap gap-2 justify-center max-w-3xl py-4 mx-auto">
                                    {suggestionChips.map((chip, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSendMessage(chip)}
                                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-primary/30 text-primary text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                                        >
                                            {chip}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Chat Input Area */}
                <div className="p-4 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
                    <ChatBox onSendMessage={handleSendMessage} />
                </div>
            </main>
        </div>
    );
};

export default ChatPage;
