import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ReferenceWidget() {
  const [target, setTarget] = useState('obj1'); // 'obj1' or 'obj2'

  return (
    <div className="w-full flex flex-col gap-12 items-center">

      {/* Code Controls */}
      <div className="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-lg shadow-xl w-full max-w-lg">
         <div className="flex items-center gap-4 mb-2">
            <span className="text-pink-400">class</span> Account {'{ ... }'}
         </div>
         <div className="h-px bg-slate-700 w-full my-4" />

         <div className="flex flex-col gap-3">
             <div
               className={`p-2 rounded cursor-pointer transition-colors flex justify-between items-center ${target === 'obj1' ? 'bg-slate-800 border border-slate-600' : 'opacity-50 hover:opacity-80'}`}
               onClick={() => setTarget('obj1')}
             >
                <span>x = <span className="text-yellow-400">new</span> Account(500)</span>
                {target === 'obj1' && <span className="text-xs text-green-400">ACTIVE</span>}
             </div>

             <div
               className={`p-2 rounded cursor-pointer transition-colors flex justify-between items-center ${target === 'obj2' ? 'bg-slate-800 border border-slate-600' : 'opacity-50 hover:opacity-80'}`}
               onClick={() => setTarget('obj2')}
             >
                <span>x = <span className="text-yellow-400">new</span> Account(50)</span>
                {target === 'obj2' && <span className="text-xs text-green-400">ACTIVE</span>}
             </div>
         </div>
      </div>

      {/* Visual Model */}
      <div className="relative w-full h-80 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex items-center justify-between overflow-hidden">

         {/* Variable x */}
         <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-white border-2 border-slate-800 rounded-lg flex flex-col items-center justify-center shadow-lg">
               <span className="font-serif italic font-bold text-2xl">x</span>
               <span className="text-[10px] font-mono text-slate-400 mt-1">REF</span>
            </div>
            <div className="text-xs font-bold uppercase text-slate-400">Variable</div>
         </div>

         {/* Memory Space */}
         <div className="flex-1 h-full mx-12 relative bg-slate-100 rounded-xl border-dashed border-2 border-slate-300 flex flex-col justify-evenly p-4">
             <div className="absolute top-2 right-2 text-xs font-bold text-slate-400 uppercase">Heap Memory</div>

             {/* Object 1 */}
             <div className="flex items-center justify-end">
                <div className={`w-48 p-4 bg-white rounded-lg shadow-md border-2 transition-colors ${target === 'obj1' ? 'border-brilliant-blue' : 'border-slate-200'}`}>
                   <div className="text-xs font-mono text-slate-400 mb-1">0x3A21</div>
                   <div className="font-bold text-slate-700">Account</div>
                   <div className="text-sm text-slate-600">balance: 500</div>
                </div>
             </div>

             {/* Object 2 */}
             <div className="flex items-center justify-end">
                <div className={`w-48 p-4 bg-white rounded-lg shadow-md border-2 transition-colors ${target === 'obj2' ? 'border-brilliant-blue' : 'border-slate-200'}`}>
                   <div className="text-xs font-mono text-slate-400 mb-1">0x8B99</div>
                   <div className="font-bold text-slate-700">Account</div>
                   <div className="text-sm text-slate-600">balance: 50</div>
                </div>
             </div>
         </div>

         {/* SVG Arrows Layer */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
            <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#007bff" />
               </marker>
            </defs>
            <motion.path
              d={target === 'obj1'
                 ? "M 120 160 C 200 160, 250 110, 350 110"
                 : "M 120 160 C 200 160, 250 250, 350 250"}
              fill="none"
              stroke="#007bff"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              initial={false}
              animate={{
                 d: target === 'obj1'
                 ? "M 120 160 C 200 160, 250 110, 380 110"
                 : "M 120 160 C 200 160, 250 250, 380 250"
              }}
              transition={{ type: "spring", stiffness: 50 }}
            />
         </svg>

      </div>

    </div>
  );
}
