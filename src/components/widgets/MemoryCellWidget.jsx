import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function MemoryCellWidget() {
  const [hasRun, setHasRun] = useState(false);
  const memoryAddress = "0x1004";
  const value = 19;

  return (
    <div className="w-full max-w-2xl flex flex-col gap-12">
       {/* Code Section */}
       <div className="bg-slate-900 rounded-xl p-6 shadow-xl flex items-center justify-between">
          <code className="font-mono text-xl text-green-400">
            <span className="text-pink-400">let</span> x = <span className="text-yellow-400">{value}</span>;
          </code>

          <button
             onClick={() => setHasRun(true)}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${
               hasRun
               ? 'bg-slate-700 text-slate-400 cursor-default'
               : 'bg-green-500 text-white hover:bg-green-400 hover:scale-105 shadow-lg shadow-green-500/20'
             }`}
             disabled={hasRun}
          >
             <Play size={16} fill="currentColor" />
             Run
          </button>
       </div>

       {/* Visualization Area */}
       <div className="relative h-48 flex items-center justify-center gap-20">

          {/* Variable Name (Mind Layer) */}
          <div className="flex flex-col items-center gap-2">
             <div className="font-bold text-slate-500 uppercase text-xs tracking-wider">Name</div>
             <div className="text-4xl font-serif italic font-bold text-slate-800">x</div>
          </div>

          {/* Arrow */}
          <div className="relative w-24 h-[2px] bg-slate-300">
             <motion.div
               className="absolute inset-0 bg-brilliant-blue"
               initial={{ width: 0 }}
               animate={{ width: hasRun ? '100%' : 0 }}
               transition={{ duration: 0.8, ease: "circOut" }}
             />
             {hasRun && (
                <motion.div
                   className="absolute -right-2 -top-1.5 text-brilliant-blue"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.7 }}
                >
                   ➤
                </motion.div>
             )}
          </div>

          {/* Memory Cell (Physical Layer) */}
          <div className="flex flex-col items-center gap-2">
             <div className="font-bold text-slate-500 uppercase text-xs tracking-wider">Address {memoryAddress}</div>
             <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-xl shadow-inner flex items-center justify-center overflow-hidden relative">
                {/* Background bits pattern */}
                <div className="absolute inset-0 opacity-10 text-[6px] leading-tight break-all p-1 font-mono text-slate-900 select-none">
                   010101010111010100101010110101001010110101010101
                </div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: hasRun ? 1 : 0, opacity: hasRun ? 1 : 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-3xl font-bold text-brilliant-blue z-10"
                >
                   {value}
                </motion.div>
             </div>
          </div>

       </div>
    </div>
  );
}
