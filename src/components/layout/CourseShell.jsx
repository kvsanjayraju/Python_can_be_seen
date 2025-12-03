import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, HelpCircle, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function CourseShell({
  currentLevelIndex,
  currentLessonIndex,
  totalLevels,
  totalLessonsInLevel,
  title,
  children,
  onNext,
  onPrev,
  onReset,
  canNext,
  canPrev,
  whyContent
}) {
  const [showWhy, setShowWhy] = useState(false);
  const progress = ((currentLessonIndex + 1) / totalLessonsInLevel) * 100;

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-800 relative">
      {/* Header / Progress Bar */}
      <header className="flex-none h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4 w-1/3">
          <div className="font-bold text-lg tracking-tight text-slate-900">
             Programming with Objects
          </div>
        </div>

        <div className="flex-1 max-w-xl flex flex-col gap-1 items-center">
           <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
             {title}
           </span>
           <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
             <div
               className="h-full bg-brilliant-blue transition-all duration-500 ease-out"
               style={{ width: `${progress}%` }}
             />
           </div>
        </div>

        <div className="w-1/3 flex justify-end gap-2">
           <button
             onClick={onReset}
             className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
             title="Reset Lesson"
           >
             <RotateCcw size={20} />
           </button>
        </div>
      </header>

      {/* Main Content Area - Split Screen */}
      <main className="flex-1 flex overflow-hidden">
        {children}
      </main>

      {/* Footer Navigation */}
      <footer className="flex-none h-20 border-t border-slate-200 bg-white px-6 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-4">
             <button
               onClick={onPrev}
               disabled={!canPrev}
               className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
             >
               <ChevronLeft size={20} />
               Back
             </button>

             <button
                onClick={() => setShowWhy(!showWhy)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all"
                title="Why is this important?"
             >
                <HelpCircle size={20} />
                Why?
             </button>
        </div>

        <button
          onClick={onNext}
          disabled={!canNext}
          className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-black text-white hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-black transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-0.5 active:translate-y-0"
        >
          Continue
          <ChevronRight size={20} />
        </button>
      </footer>

      {/* Why? Modal/Overlay */}
      <AnimatePresence>
        {showWhy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-24 left-6 z-30 max-w-md w-full bg-white rounded-2xl shadow-2xl border border-slate-200 p-6"
          >
             <div className="flex justify-between items-start mb-4">
               <h3 className="font-bold text-lg text-slate-900">Why learn this?</h3>
               <button onClick={() => setShowWhy(false)} className="p-1 hover:bg-slate-100 rounded-full text-slate-400">
                 <X size={16} />
               </button>
             </div>
             <div className="prose prose-sm text-slate-600">
               {whyContent || "Understanding this concept is crucial for building mental models that match how the computer actually works. This prevents confusion later when debugging complex issues."}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LessonView({ content, widget }) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Left: Text Content */}
      <div className="w-full md:w-5/12 lg:w-1/3 p-8 md:p-12 overflow-y-auto bg-white border-r border-slate-200">
        <div className="prose prose-slate prose-lg max-w-none">
          {content}
        </div>
      </div>

      {/* Right: Interactive Widget */}
      <div className="w-full md:w-7/12 lg:w-2/3 bg-slate-50 relative overflow-hidden flex items-center justify-center p-8">
        <div className="w-full h-full max-w-4xl max-h-[800px] flex items-center justify-center">
           {widget}
        </div>
      </div>
    </div>
  );
}
