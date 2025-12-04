import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Anchor, Settings, Hammer, FileCode, Play, Box, Zap, Copy, ArrowRight, ScanLine } from 'lucide-react';

export function InteractiveLesson({ challenge, visual, xRay }) {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option) => {
    if (hasAnswered) return;
    setSelectedOption(option);
    const correct = option === challenge.correctAnswer;
    setIsCorrect(correct);
    setHasAnswered(true);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative bg-slate-50 text-slate-900 font-sans">
      <AnimatePresence mode="wait">
        {!hasAnswered ? (
          <ChallengeCard
            key="challenge"
            question={challenge.question}
            options={challenge.options}
            onOptionClick={handleOptionClick}
          />
        ) : (
          <VisualReveal
            key="visual"
            visual={visual}
            xRay={xRay}
            isCorrect={isCorrect}
            userChoice={selectedOption}
            correctChoice={challenge.correctAnswer}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ChallengeCard({ question, options, onOptionClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full text-center border border-slate-100"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 leading-tight">
          {question}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onOptionClick(option)}
            className="w-full py-4 px-6 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold hover:border-black hover:bg-slate-50 transition-all text-lg shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function VisualReveal({ visual, xRay, isCorrect, userChoice, correctChoice }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      {/* Feedback Banner */}
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg ${
             isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
         }`}
      >
         {isCorrect ? <Check size={16} /> : <X size={16} />}
         {isCorrect ? 'Correct' : `Incorrect. It's ${correctChoice}`}
      </motion.div>

      {/* Main Visual Metaphor */}
      <motion.div
         className="relative w-64 h-64 flex items-center justify-center"
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
      >
          <VisualIcon type={visual.type} />
      </motion.div>

      {/* Title & Description */}
      <div className="text-center space-y-2">
         <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-slate-900"
         >
            {visual.title}
         </motion.h2>
         <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-500 font-mono text-sm uppercase tracking-widest"
         >
            {visual.description}
         </motion.p>
      </div>

      {/* X-Ray Explanation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 max-w-md w-full"
      >
         <div className="flex items-center gap-2 mb-3 text-slate-400 font-bold uppercase text-xs tracking-wider">
            <ScanLine size={14} /> X-Ray Vision
         </div>
         <p className="text-slate-600 text-lg leading-relaxed font-medium">
           {xRay}
         </p>
      </motion.div>
    </div>
  );
}

function VisualIcon({ type }) {
  switch (type) {
    case 'ANCHOR':
      return (
        <div className="relative">
           <div className="absolute inset-0 bg-red-500 blur-3xl opacity-20 rounded-full animate-pulse" />
           <Anchor size={120} className="text-red-600 relative z-10 drop-shadow-2xl" />
        </div>
      );
    case 'GEAR':
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
           <Settings size={120} className="text-amber-500 drop-shadow-xl" />
        </motion.div>
      );
    case 'CONSTRUCTION':
      return (
         <div className="flex items-end gap-2">
            <motion.div
               initial={{ height: 0 }}
               animate={{ height: 100 }}
               className="w-24 bg-slate-300 rounded-t-lg border-2 border-slate-400 relative overflow-hidden"
            >
               <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 gap-1 p-1 opacity-20">
                  {[...Array(8)].map((_,i) => <div key={i} className="bg-slate-600 rounded-sm" />)}
               </div>
            </motion.div>
            <Hammer size={80} className="text-blue-500 -mb-2" />
         </div>
      );
    case 'BLUEPRINT':
      return (
        <div className="relative">
           <FileCode size={100} className="text-slate-300" />
           <motion.div
             className="absolute -right-4 -bottom-4 bg-white p-2 rounded-full shadow-lg border border-slate-100"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 0.5 }}
           >
              <Copy size={40} className="text-emerald-500" />
           </motion.div>
        </div>
      );
    case 'FACTORY':
      return (
        <div className="flex items-center gap-4">
           <div className="flex flex-col items-center">
              <Box size={60} className="text-slate-400" />
              <span className="text-xs font-bold text-slate-400 mt-2">BODY</span>
           </div>
           <ArrowRight size={30} className="text-slate-300" />
           <div className="flex flex-col items-center">
              <div className="relative">
                 <Box size={60} className="text-slate-800" />
                 <Zap size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-xs font-bold text-slate-800 mt-2">SOUL</span>
           </div>
        </div>
      );
    default:
      return <Play size={100} className="text-slate-300" />;
  }
}
