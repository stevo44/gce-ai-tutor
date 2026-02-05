import React from 'react';
import ProgressBar from '../components/dashboard/ProgressBar';

const TopicMasteryPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="flex h-screen overflow-hidden">
                {/* Side Navigation */}
                <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col">
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-primary rounded-lg p-2 text-white">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div>
                                <h1 className="text-primary dark:text-white text-base font-bold leading-none">GCE Portal</h1>
                                <p className="text-slate-500 text-xs mt-1">Advanced Level</p>
                            </div>
                        </div>
                        <nav className="space-y-1">
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary dark:text-white rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                                <span className="text-sm font-semibold">Chemistry</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">bolt</span>
                                <span className="text-sm font-medium">Physics</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">genetics</span>
                                <span className="text-sm font-medium">Biology</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">calculate</span>
                                <span className="text-sm font-medium">Mathematics</span>
                            </a>
                            <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
                                <span className="material-symbols-outlined">history_edu</span>
                                <span className="text-sm font-medium">History</span>
                            </a>
                        </nav>
                    </div>
                    <div className="mt-auto p-6 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div
                                className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL4qzJb2DV_G6_BjQwqWYG15QKJ52G_-p-VxsPrdKq6d6k8UJZLdK9zuB161UbFqM2Ig1INKz8PANCf-jviLpctJTS4fXZOXbSA-FL4sLn-WTzaDFqyKyxvYUcE3Z7vOkv2WBRFONCw0ktRj87s_vGAtRE2b6AKIRL-SbvUF9B4pzDInaHdM2idmyLrpmlD-xJq7NRHOPIkHJqOrCNai76rCEev7LaB5Ctelsl3HU8Im8WdyGZ4e45WfnpcZYep7PB3SjyM70PJA7m')", backgroundSize: 'cover' }}
                            >
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">M. Ngando</p>
                                <p className="text-xs text-slate-500 truncate">Upper Sixth</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">settings</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark scroll-smooth">
                    {/* Top Nav Bar */}
                    <header className="sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h2 className="text-lg font-bold">Topic Mastery</h2>
                            <nav className="hidden md:flex gap-6 ml-8">
                                <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Study Plan</a>
                                <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Mock Exams</a>
                                <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors underline decoration-2 underline-offset-8 decoration-primary" href="#">Resources</a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden lg:block">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                                <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20" placeholder="Search topics..." type="text" />
                            </div>
                            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                        </div>
                    </header>

                    <div className="max-w-5xl mx-auto p-8">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 mb-6">
                            <a className="text-slate-400 text-sm hover:text-slate-600 flex items-center gap-1" href="#">
                                <span className="material-symbols-outlined text-lg">home</span>
                                Dashboard
                            </a>
                            <span className="text-slate-300">/</span>
                            <a className="text-slate-400 text-sm hover:text-slate-600" href="#">Chemistry</a>
                            <span className="text-slate-300">/</span>
                            <span className="text-slate-900 dark:text-white font-medium text-sm">Topic Analysis</span>
                        </div>

                        {/* Subject Mastery Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 mb-8 shadow-sm">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                                <div>
                                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Chemistry - GCE Advanced Level</h1>
                                    <p className="text-slate-500 max-w-xl">Deep dive into your mastery across the official GCE syllabus. Use the AI tutor to bridge gaps in red-labeled topics.</p>
                                </div>
                                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex items-center gap-4 min-w-[240px]">
                                    <div className="size-12 rounded-full border-4 border-primary border-r-slate-200 flex items-center justify-center">
                                        <span className="text-primary font-bold text-xs">65%</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Overall Mastery</p>
                                        <p className="text-lg font-bold text-primary">65% Achieved</p>
                                    </div>
                                </div>
                            </div>
                            <ProgressBar percentage={65} label="Syllabus Completion" goal="Goal: 90% by June Exams" />

                            {/* Legend */}
                            <div className="flex gap-6 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Strong (80-100%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-amber-500"></span>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Needs Practice (50-79%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-rose-500"></span>
                                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Weak (0-49%)</span>
                                </div>
                            </div>
                        </div>

                        {/* Topics Accordion List */}
                        <div className="space-y-4">
                            {/* Topic Item 1 (Expanded) */}
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-slate-400">expand_more</span>
                                        <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">blur_on</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Physical Chemistry: Atomic Structure</h3>
                                            <p className="text-xs text-slate-500">4 Subtopics • 12 Syllabus Objectives</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="px-2 py-1 rounded bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[10px] font-bold tracking-wider uppercase">Priority Review</span>
                                        <div className="text-right">
                                            <p className="text-sm font-bold">42%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {/* Subtopic 1 */}
                                    <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="size-2.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Orbitals &amp; Electronic Configuration</p>
                                                <p className="text-xs text-slate-500">Last practiced 4 days ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                                                Ask AI Tutor
                                            </button>
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                <span className="material-symbols-outlined text-sm">quiz</span>
                                                Practice
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" title="Syllabus Objectives">
                                                <span className="material-symbols-outlined text-xl">info</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Subtopic 2 */}
                                    <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="size-2.5 rounded-full bg-amber-500"></div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Ionisation Energies</p>
                                                <p className="text-xs text-slate-500">Mastery improving</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg">
                                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                                                Ask AI
                                            </button>
                                            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg">
                                                <span className="material-symbols-outlined text-sm">quiz</span>
                                                Practice
                                            </button>
                                            <button className="p-1.5 text-slate-400"><span className="material-symbols-outlined text-xl">info</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Topic Item 2 (Collapsed) */}
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                                        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">polyline</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Chemical Bonding</h3>
                                            <p className="text-xs text-slate-500">6 Subtopics • 18 Syllabus Objectives</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-emerald-600">88%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Topic Item 3 (Collapsed) */}
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                                        <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">fire_hydrant</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Energetics &amp; Thermodynamics</h3>
                                            <p className="text-xs text-slate-500">5 Subtopics • 14 Syllabus Objectives</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-amber-600">62%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Topic Item 4 (Collapsed) */}
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                                <div className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
                                            <span className="material-symbols-outlined">eco</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Organic Chemistry Fundamentals</h3>
                                            <p className="text-xs text-slate-500">8 Subtopics • 22 Syllabus Objectives</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold tracking-wider uppercase">Not Started</span>
                                        <div className="text-right">
                                            <p className="text-sm font-bold text-slate-400">0%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary to-indigo-900 text-white flex flex-col items-center text-center shadow-xl">
                            <div className="size-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Ready for a Full Mock Exam?</h3>
                            <p className="text-indigo-100 mb-6 max-w-md">Challenge yourself with a timed Paper 1 or Paper 2 mock exam based on your current weakness identification.</p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg">Start Mock Exam</button>
                                <button className="px-6 py-3 bg-primary/40 border border-white/30 text-white font-bold rounded-xl hover:bg-primary/50 transition-all">View Performance History</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* AI Tutor Mini Modal (Visual Only) */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="size-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </button>
            </div>
        </div>
    );
};

export default TopicMasteryPage;
