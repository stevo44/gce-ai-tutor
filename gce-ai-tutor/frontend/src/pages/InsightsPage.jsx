import React from 'react';

const InsightsPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#101019] dark:text-white antialiased">
            <div className="flex min-h-screen flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between border-b border-[#eae9f1] dark:border-[#2a2a3a] bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="size-8">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#101019] dark:text-white text-lg font-bold leading-tight tracking-tight">GCE Analytics</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-[#101019] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
                            <a className="text-[#101019] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Study Materials</a>
                            <a className="text-[#101019] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">Mock Exams</a>
                            <a className="text-primary text-sm font-bold border-b-2 border-primary" href="#">Analytics</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center bg-[#eae9f1] dark:bg-[#1f1f2e] rounded-lg px-3 py-1.5">
                            <span className="material-symbols-outlined text-gray-500 text-xl">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-40 placeholder:text-gray-500" placeholder="Search topics..." type="text" />
                        </div>
                        <button className="p-2 rounded-lg bg-[#eae9f1] dark:bg-[#1f1f2e] text-[#101019] dark:text-white">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="size-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">JD</div>
                    </div>
                </header>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar Navigation */}
                    <aside className="w-64 border-r border-[#eae9f1] dark:border-[#2a2a3a] bg-white dark:bg-background-dark hidden lg:flex flex-col p-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-3 items-center p-2 rounded-xl bg-primary/5 dark:bg-primary/20">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDstXkznWzfRzjs6j4gC3K41Y7Lez6fRh-n8brwg3cSx6lxKwiRjrenmhIbvQbQ1DsBnJIDP6Tl7XbSs8pIiYCxbEhLwmG5yRoL03pP21YncdLPCuh8fNvcpIDh0Tg3frJ_uemU5vGTGRavEeBIrQFP3B1PcZjEfp8AZ9gN7lCo9TpL8tfhMoOnaQpyw-qC1gP7u6GGKB3XkOXBES8uwa-OgvzKXaxL7HwLfuvG8N2YP0vrD5X9BPzVXLO13w1frsBsrf93YnoPxrzf")' }}></div>
                                <div className="flex flex-col overflow-hidden">
                                    <h1 className="text-[#101019] dark:text-white text-sm font-bold truncate leading-tight">Mbi Samuel</h1>
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">A-Level Science</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] px-3 mb-2">Main Menu</p>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1f1f2e] transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                                    <span className="text-sm font-semibold">Overview</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-lg shadow-primary/20" href="#">
                                    <span className="material-symbols-outlined text-[20px]">insights</span>
                                    <span className="text-sm font-semibold">Learning Insights</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1f1f2e] transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">error</span>
                                    <span className="text-sm font-semibold">Weakness Tracker</span>
                                </a>
                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1f1f2e] transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">psychology</span>
                                    <span className="text-sm font-semibold">AI Tutor</span>
                                </a>
                            </div>
                            <div className="mt-8">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] px-3 mb-2">Exam Countdown</p>
                                <div className="mx-3 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl">
                                    <p className="text-orange-800 dark:text-orange-400 text-xs font-bold uppercase tracking-tighter">GCE Starts In</p>
                                    <p className="text-orange-900 dark:text-orange-300 text-2xl font-black">42 Days</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark scroll-smooth">
                        <div className="max-w-[1200px] mx-auto p-6 md:p-10">
                            {/* Page Heading */}
                            <div className="flex flex-wrap justify-between items-end gap-6 mb-8">
                                <div className="flex flex-col gap-2">
                                    <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Analytics Dashboard</p>
                                    <h1 className="text-[#101019] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Learning Insights</h1>
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-base max-w-xl leading-relaxed">Personalized performance breakdown for Cameroon GCE (Advanced Level) preparation.</p>
                                </div>
                                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    <span className="material-symbols-outlined">bolt</span>
                                    Start AI Tutoring Session
                                </button>
                            </div>

                            {/* Top Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] border border-[#d4d4e3] dark:border-[#2a2a3a] shadow-sm">
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Average Mastery</p>
                                    <div className="flex items-end gap-2">
                                        <p className="text-[#101019] dark:text-white text-3xl font-black leading-none">72%</p>
                                        <p className="text-emerald-500 text-sm font-bold flex items-center"><span className="material-symbols-outlined text-xs">arrow_upward</span>5%</p>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full mt-2">
                                        <div className="bg-primary h-full rounded-full" style={{ width: '72%' }}></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] border border-[#d4d4e3] dark:border-[#2a2a3a] shadow-sm">
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Study Hours</p>
                                    <div className="flex items-end gap-2">
                                        <p className="text-[#101019] dark:text-white text-3xl font-black leading-none">128h</p>
                                        <p className="text-orange-500 text-sm font-bold flex items-center"><span className="material-symbols-outlined text-xs">arrow_downward</span>2%</p>
                                    </div>
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[10px] mt-1 italic">Vs last month</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a1a2e] border border-[#d4d4e3] dark:border-[#2a2a3a] shadow-sm">
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Exam Readiness</p>
                                    <div className="flex items-end gap-2">
                                        <p className="text-[#101019] dark:text-white text-3xl font-black leading-none text-emerald-600">B+</p>
                                        <p className="text-primary text-sm font-bold">Target: A</p>
                                    </div>
                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[10px] mt-1 font-semibold">Projected Grade based on Mocks</p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-primary dark:bg-primary shadow-xl shadow-primary/20">
                                    <p className="text-white/70 text-xs font-bold uppercase tracking-wider">Practice Tasks</p>
                                    <div className="flex items-end gap-2 text-white">
                                        <p className="text-3xl font-black leading-none">14/20</p>
                                        <p className="text-white/80 text-sm font-bold">Today</p>
                                    </div>
                                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                                        <div className="bg-white h-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Analytics Column */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Topic Mastery Chart Card */}
                                    <div className="bg-white dark:bg-[#1a1a2e] rounded-xl border border-[#d4d4e3] dark:border-[#2a2a3a] p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <h3 className="text-[#101019] dark:text-white text-lg font-bold">Topic Mastery Over Time</h3>
                                                <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-medium">Tracking improvement across Physics, Chemistry, and Pure Maths</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <select className="text-xs font-bold border-[#d4d4e3] dark:border-[#2a2a3a] dark:bg-[#1a1a2e] rounded-lg">
                                                    <option>All Subjects</option>
                                                    <option>Physics</option>
                                                    <option>Chemistry</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <p className="text-[#101019] dark:text-white tracking-light text-4xl font-black">72%</p>
                                            <p className="text-emerald-600 text-sm font-bold">+12% from January</p>
                                        </div>
                                        <div className="relative h-64 w-full">
                                            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 500 150">
                                                <defs>
                                                    <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#2f2d8f" stopOpacity="0.2"></stop>
                                                        <stop offset="100%" stopColor="#2f2d8f" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                                {/* Area path */}
                                                <path d="M0,130 C50,120 100,140 150,90 C200,40 250,60 300,50 C350,40 400,20 450,30 C500,40 500,150 0,150 Z" fill="url(#chartGradient)"></path>
                                                {/* Line path */}
                                                <path d="M0,130 C50,120 100,140 150,90 C200,40 250,60 300,50 C350,40 400,20 450,30" fill="none" stroke="#2f2d8f" strokeLinecap="round" strokeWidth="4"></path>
                                                {/* Markers */}
                                                <circle cx="150" cy="90" fill="#2f2d8f" r="4"></circle>
                                                <circle cx="300" cy="50" fill="#2f2d8f" r="4"></circle>
                                                <circle cx="450" cy="30" fill="#2f2d8f" r="4"></circle>
                                            </svg>
                                            <div className="flex justify-between mt-4 text-[#5b5b8b] dark:text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                                                <span>Jan</span>
                                                <span>Feb</span>
                                                <span>Mar</span>
                                                <span>Apr</span>
                                                <span>May</span>
                                                <span>Jun</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Weakness Persistence Section */}
                                    <div>
                                        <h3 className="text-[#101019] dark:text-white text-xl font-black mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-600">warning</span>
                                            Weakness Persistence
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-5 rounded-xl border-l-4 border-orange-500 bg-white dark:bg-[#1a1a2e] shadow-sm flex flex-col gap-3">
                                                <div className="flex justify-between">
                                                    <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Recurring Error</p>
                                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700">85% Frequency</span>
                                                </div>
                                                <h4 className="text-[#101019] dark:text-white font-bold text-base leading-tight">Equilibrium Constants Calculation</h4>
                                                <p className="text-[#5b5b8b] dark:text-gray-400 text-sm leading-relaxed">You struggle consistently with Kp vs Kc conversions. This has appeared in 4 of your last 5 Chemistry mocks.</p>
                                                <button className="text-primary text-xs font-black flex items-center gap-1 hover:underline">
                                                    PRACTICE TARGETED QUIZ <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </button>
                                            </div>
                                            <div className="p-5 rounded-xl border-l-4 border-orange-500 bg-white dark:bg-[#1a1a2e] shadow-sm flex flex-col gap-3">
                                                <div className="flex justify-between">
                                                    <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Topic Gap</p>
                                                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-900/30 text-orange-700">Low Coverage</span>
                                                </div>
                                                <h4 className="text-[#101019] dark:text-white font-bold text-base leading-tight">Projectiles &amp; Circular Motion</h4>
                                                <p className="text-[#5b5b8b] dark:text-gray-400 text-sm leading-relaxed">Advanced mechanics remains your lowest scoring area. AI recommends focusing on 2D resolution of forces.</p>
                                                <button className="text-primary text-xs font-black flex items-center gap-1 hover:underline">
                                                    ASK AI TUTOR <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Ladder Column */}
                                <div className="flex flex-col gap-6">
                                    <div className="bg-white dark:bg-[#1a1a2e] rounded-xl border border-[#d4d4e3] dark:border-[#2a2a3a] p-6 sticky top-24">
                                        <h3 className="text-[#101019] dark:text-white text-lg font-bold mb-6">Progress Ladder</h3>
                                        <p className="text-[#5b5b8b] dark:text-gray-400 text-xs font-medium mb-8">Journey to Cameroon GCE Readiness</p>
                                        <div className="relative flex flex-col gap-8">
                                            {/* Progress Line */}
                                            <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-[#2a2a3a]"></div>
                                            <div className="absolute left-[13px] top-2 h-[65%] w-0.5 bg-emerald-500"></div>

                                            {/* Ladder Steps */}
                                            <div className="relative flex gap-4">
                                                <div className="size-7 rounded-full bg-emerald-500 text-white flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-emerald-600 leading-none mb-1">Step 1</p>
                                                    <h4 className="text-[#101019] dark:text-white font-bold text-sm">Curriculum Coverage</h4>
                                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[11px]">85% Syllabus completed</p>
                                                </div>
                                            </div>
                                            <div className="relative flex gap-4">
                                                <div className="size-7 rounded-full bg-emerald-500 text-white flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-emerald-600 leading-none mb-1">Step 2</p>
                                                    <h4 className="text-[#101019] dark:text-white font-bold text-sm">Foundation Mastery</h4>
                                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[11px]">Passed all basic unit tests</p>
                                                </div>
                                            </div>
                                            <div className="relative flex gap-4">
                                                <div className="size-7 rounded-full bg-emerald-500 text-white flex items-center justify-center z-10 border-4 border-white dark:border-[#1a1a2e]">
                                                    <div className="size-2 rounded-full bg-white animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-primary leading-none mb-1">Current Step</p>
                                                    <h4 className="text-[#101019] dark:text-white font-bold text-sm">Past Paper Mastery</h4>
                                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[11px]">Solving 2015-2023 questions</p>
                                                </div>
                                            </div>
                                            <div className="relative flex gap-4 opacity-40">
                                                <div className="size-7 rounded-full bg-gray-300 dark:bg-gray-700 text-white flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-sm">lock</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-gray-500 leading-none mb-1">Step 4</p>
                                                    <h4 className="text-[#101019] dark:text-white font-bold text-sm">Time Proficiency</h4>
                                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[11px]">Timed Paper 1 &amp; 2 simulations</p>
                                                </div>
                                            </div>
                                            <div className="relative flex gap-4 opacity-40">
                                                <div className="size-7 rounded-full bg-gray-300 dark:bg-gray-700 text-white flex items-center justify-center z-10">
                                                    <span className="material-symbols-outlined text-sm">stars</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold uppercase text-gray-500 leading-none mb-1">Step 5</p>
                                                    <h4 className="text-[#101019] dark:text-white font-bold text-sm">Exam Ready</h4>
                                                    <p className="text-[#5b5b8b] dark:text-gray-400 text-[11px]">Consistent Grade A in Mock Papers</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#2a2a3a]">
                                            <div className="p-3 bg-primary/5 dark:bg-primary/20 rounded-lg">
                                                <p className="text-xs text-primary dark:text-primary font-bold mb-1">AI Recommendation:</p>
                                                <p className="text-[11px] text-[#5b5b8b] dark:text-gray-300 leading-relaxed italic">"Complete 3 more chemistry paper 2 sections to unlock the 'Time Proficiency' rung."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default InsightsPage;
