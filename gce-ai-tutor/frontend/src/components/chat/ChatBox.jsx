import React from 'react';

const ChatBox = () => {
    return (
        <div className="p-4 sm:p-6 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto">
                <div className="relative flex items-end gap-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all shadow-inner">
                    <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">attach_file</span>
                    </button>
                    <textarea
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-1 resize-none max-h-32 placeholder-gray-400 min-h-[40px] leading-relaxed"
                        placeholder="Ask your GCE tutor anything..."
                        rows="1"
                    ></textarea>
                    <div className="flex items-center gap-1">
                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">mic</span>
                        </button>
                        <button className="flex items-center justify-center size-10 bg-primary text-white rounded-lg hover:bg-primary/90 shadow-sm transition-all">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-between px-2">
                    <p className="text-[10px] text-gray-400 font-medium">AI can occasionally provide incorrect info. Verify with your teacher.</p>
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500"></span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Tutor Online</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
