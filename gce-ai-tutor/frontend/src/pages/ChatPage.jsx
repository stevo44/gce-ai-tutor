import React from 'react';
import MessageBubble from '../components/chat/MessageBubble';
import ChatBox from '../components/chat/ChatBox';

const ChatPage = () => {
    // Sample messages for demonstration
    const messages = [
        {
            isAI: false,
            avatar: 'JD',
            content: "Can you explain how the equilibrium constant (Kc) is affected when we change the temperature of the system? I'm getting confused with exothermic and endothermic reactions.",
            time: '10:42 AM'
        },
        {
            isAI: true,
            title: 'Temperature and Kc',
            content: `<p>This is a fundamental concept in the <strong>GCE Chemistry Syllabus</strong>. Unlike pressure or concentration changes, <strong>temperature is the only factor that changes the value of Kc.</strong></p>
                <ul class="list-none space-y-3">
                    <li class="flex gap-3">
                        <span class="material-symbols-outlined text-primary text-sm mt-0.5">trending_up</span>
                        <span><strong>Endothermic Reactions (ΔH &gt; 0):</strong> Increasing temperature shifts the equilibrium to the right (products). Thus, <strong>Kc increases</strong>.</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="material-symbols-outlined text-red-500 text-sm mt-0.5">trending_down</span>
                        <span><strong>Exothermic Reactions (ΔH &lt; 0):</strong> Increasing temperature shifts the equilibrium to the left (reactants). Thus, <strong>Kc decreases</strong>.</span>
                    </li>
                </ul>
                <div class="bg-primary/5 border-l-4 border-primary p-4 my-4 italic">
                    "Think of heat as a reactant in endothermic reactions and a product in exothermic reactions. Le Chatelier's Principle then applies naturally!"
                </div>`,
            time: '10:43 AM',
            sources: [
                {
                    type: 'Syllabus Code',
                    text: 'GCE-CHEM-715-1.1: Effects of temperature on the equilibrium position.'
                },
                {
                    type: 'Recommended Text',
                    text: 'Ababio: New School Chemistry, Page 214 - Physical Chemistry.'
                }
            ]
        }
    ];

    const suggestionChips = [
        "Explain Le Chatelier's principle again?",
        "Give me a practice problem",
        "Show the Kc formula"
    ];

    const recentSessions = [
        { title: 'Chemical Equilibrium', active: true },
        { title: 'Acid-Base Titration', active: false },
        { title: 'Newtonian Physics', active: false },
        { title: 'The Carbon Cycle', active: false },
        { title: 'Calculus: Integration', active: false }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-200 h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-6 py-3 z-10">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 text-primary">
                        <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                            <span className="material-symbols-outlined text-xl">school</span>
                        </div>
                        <h2 className="text-charcoal dark:text-white text-lg font-bold leading-tight tracking-tight">Cameroon GCE Tutor</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-charcoal dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Syllabus</a>
                        <a className="text-charcoal dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Textbooks</a>
                        <a className="text-charcoal dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Past Papers</a>
                        <a className="text-charcoal dark:text-gray-400 text-sm font-medium hover:text-primary transition-colors" href="#">Mock Exams</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary">
                        <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder-gray-500" placeholder="Search concepts..." type="text" />
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">notifications</span>
                    </button>
                    <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">
                        JD
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar: Recent Topics */}
                <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark flex flex-col hidden lg:flex">
                    <div className="p-4 flex flex-col h-full">
                        <div className="flex flex-col mb-6">
                            <h1 className="text-charcoal dark:text-white text-xs font-bold uppercase tracking-widest mb-4">Recent Sessions</h1>
                            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-all mb-4">
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
                <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark relative">
                    {/* Chat Header */}
                    <div className="bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                                <a className="hover:text-primary" href="#">Chemistry</a>
                                <span>/</span>
                                <span className="text-primary">Advanced Level</span>
                            </div>
                            <h2 className="text-charcoal dark:text-white text-xl font-bold flex items-center gap-2">
                                Tutor: Chemical Equilibrium
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Live AI</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">print</span>
                                Print Session
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-sm">auto_stories</span>
                                View Textbooks
                            </button>
                        </div>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8">
                        {messages.map((message, index) => (
                            <MessageBubble key={index} message={message} isAI={message.isAI} />
                        ))}

                        {/* Suggestion Chips */}
                        <div className="flex flex-wrap gap-2 justify-center max-w-3xl py-4">
                            {suggestionChips.map((chip, index) => (
                                <button
                                    key={index}
                                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-primary/30 text-primary text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                    {chip}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chat Input Area */}
                    <ChatBox />
                </main>
            </div>
        </div>
    );
};

export default ChatPage;
