import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export function BlueprintWidget() {
  const [houses, setHouses] = useState([]);

  const addHouse = () => {
    if (houses.length < 5) {
      setHouses([...houses, {
        id: Date.now(),
        color: ['bg-blue-400', 'bg-red-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'][houses.length % 5]
      }]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
      {/* Blueprint Side */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative group cursor-pointer" onClick={addHouse}>
           <div className="w-48 h-64 bg-blueprint-blue bg-indigo-600 rounded-lg shadow-2xl p-4 flex flex-col items-center justify-center text-white border-4 border-white/20 hover:scale-105 transition-transform active:scale-95">
              <div className="text-6xl mb-4">🏠</div>
              <div className="font-mono text-sm opacity-70">class House</div>
              <div className="mt-4 text-xs space-y-1 opacity-60 font-mono text-left w-full pl-4">
                <div>floors: 2</div>
                <div>rooms: 3</div>
                <div>def shelter(): ...</div>
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 font-bold whitespace-nowrap flex items-center gap-2">
                 <Plus size={16} /> Click to Instantiate
              </div>
           </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="text-slate-300 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>

      {/* Memory Side (Objects) */}
      <div className="w-64 min-h-[300px] flex flex-col items-center justify-start gap-4 p-4 rounded-2xl bg-slate-200/50 border border-slate-200">
         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Memory (RAM)</div>

         <AnimatePresence>
           {houses.map((house, i) => (
             <motion.div
               key={house.id}
               initial={{ opacity: 0, scale: 0.5, x: -50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               exit={{ opacity: 0, scale: 0 }}
               className={`w-full p-3 rounded-lg bg-white shadow-sm border border-slate-200 flex items-center gap-3`}
             >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${house.color}`}>
                   H{i+1}
                </div>
                <div className="flex-1">
                   <div className="text-xs font-mono text-slate-400">0x{house.id.toString(16).slice(-4)}</div>
                   <div className="text-sm font-bold text-slate-700">House Object</div>
                </div>
             </motion.div>
           ))}

           {houses.length === 0 && (
             <div className="text-slate-400 text-sm text-center mt-10 italic">
               No objects created yet.
             </div>
           )}
         </AnimatePresence>
      </div>
    </div>
  );
}
