import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, Box, ArrowRight, Database, Settings, FileCode, Layers, Play } from 'lucide-react';

export function PythonInterpreterWidget({ phase, xRayContent }) {
  // Phase logic handled by rendering different sub-components or states
  // Common layout: Dark RAM background

  return (
    <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden relative font-mono text-xs md:text-sm text-slate-300 shadow-2xl flex flex-col">
       {/* Header: X-Ray Content Display */}
       <div className="bg-slate-800 border-b border-slate-700 p-4 shrink-0 z-10">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold uppercase tracking-wider">
             <Monitor size={16} />
             <span>System Monitor</span>
          </div>
          <div className="grid grid-cols-1 gap-1 text-slate-400 leading-tight">
             {xRayContent.split('\n').map((line, i) => (
               <div key={i} className="flex gap-2">
                 <span className="w-2 h-2 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                 <span>{line}</span>
               </div>
             ))}
          </div>
       </div>

       {/* Main Visualization Area */}
       <div className="flex-1 relative p-6 overflow-hidden">
         <AnimatePresence mode="wait">
            {phase === 'PHASE_1_BOOT' && <BootPhase key="boot" />}
            {phase === 'PHASE_2_COMPILATION' && <CompilationPhase key="compilation" />}
            {phase === 'PHASE_3_ALLOCATION' && <AllocationPhase key="allocation" />}
            {phase === 'PHASE_3_INHERITANCE' && <InheritancePhase key="inheritance" />}
            {phase === 'PHASE_4_INSTANCE' && <InstancePhase key="instance" />}
         </AnimatePresence>
       </div>

       {/* Background Grid Effect */}
       <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{ backgroundImage: 'linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
       </div>
    </div>
  );
}

// --- Phase Components ---

function BootPhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
       {/* OS Kernel */}
       <motion.div
         initial={{ x: -200, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.8, type: 'spring' }}
         className="absolute left-0 top-10 bg-slate-700 p-4 rounded-r-xl border-y border-r border-slate-600 shadow-lg"
       >
         <div className="flex items-center gap-2 text-slate-100 font-bold">
           <Cpu size={20} /> OS KERNEL
         </div>
       </motion.div>

       {/* Memory Segment */}
       <div className="relative mt-12 w-64 h-80 border-2 border-slate-700 rounded-lg bg-slate-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
          <div className="bg-slate-800 p-2 text-center text-slate-400 text-xs border-b border-slate-700">RAM: .data segment</div>

          <div className="flex-1 p-4 relative">
             {/* 0x100A Address Marker */}
             <div className="absolute top-20 left-2 text-slate-600 font-mono text-[10px]">0x100A</div>

             {/* PyType_Type Anchor */}
             <motion.div
               initial={{ scale: 0, rotate: -45 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
               className="absolute top-20 left-16 w-32 h-32 bg-red-900/30 border-2 border-red-500 rounded-lg flex flex-col items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]"
             >
                <div className="text-red-400 font-bold text-center">PyType_Type</div>
                <div className="text-red-500/50 text-[10px] uppercase mt-1">The Metaclass</div>
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full">ROOT</div>
             </motion.div>
          </div>
       </div>
    </div>
  )
}

function CompilationPhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12">
      {/* Code Input */}
      <motion.div
         initial={{ opacity: 1 }}
         animate={{ opacity: 0.2, scale: 0.9 }}
         transition={{ delay: 1, duration: 1 }}
         className="bg-slate-800 p-4 rounded-lg border border-slate-600 font-mono text-emerald-400"
      >
        class person: pass
      </motion.div>

      <div className="flex gap-16 items-center">
         {/* Opcode Gear */}
         <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="w-20 h-20 rounded-full border-4 border-dashed border-blue-500 flex items-center justify-center bg-slate-800"
            >
              <Settings className="text-blue-400 animate-spin-slow" size={32} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-blue-400 font-bold"
            >
              Opcode 71
            </motion.div>
         </div>

         <ArrowRight className="text-slate-600" />

         {/* Stack */}
         <div className="flex flex-col items-center gap-2">
             <div className="w-32 h-40 border-b-4 border-x-4 border-slate-600 rounded-b-lg relative flex flex-col-reverse p-2 gap-2 bg-slate-900/50">
                 <motion.div
                   initial={{ y: -100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 2.5, type: 'spring' }}
                   className="w-full h-10 bg-purple-900/50 border border-purple-500 rounded flex items-center justify-center text-purple-300 font-mono text-xs"
                 >
                   'person'
                 </motion.div>
             </div>
             <span className="text-slate-500 text-xs uppercase">Evaluation Stack</span>
         </div>
      </div>
    </div>
  )
}

function AllocationPhase() {
  return (
    <div className="w-full h-full relative">
       {/* Static Memory (Background Ref) */}
       <div className="absolute top-4 left-4 opacity-50">
          <div className="w-24 h-24 border border-red-500/50 rounded flex items-center justify-center text-xs text-red-500">
             0x100A<br/>PyType
          </div>
       </div>

       {/* OS Kernel Response */}
       <motion.div
          className="absolute top-4 right-4 bg-slate-700 px-3 py-1 rounded text-xs text-slate-300 border border-slate-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
       >
         malloc(0x8000) OK
       </motion.div>

       {/* The New Class Object */}
       <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="w-48 h-56 bg-slate-800 border-2 border-slate-500 rounded-lg relative shadow-xl"
          >
             {/* Header */}
             <div className="absolute -top-6 left-0 text-slate-400 font-mono text-xs">Address: 0x8000</div>
             <div className="w-full h-8 bg-slate-700 border-b border-slate-600 flex items-center justify-center text-xs text-slate-300">
                PyTypeObject
             </div>

             {/* ob_type field */}
             <div className="mt-4 mx-4 p-2 bg-slate-900 border border-slate-600 rounded flex justify-between items-center group">
                <span className="text-[10px] text-slate-500">ob_type</span>
                <span className="text-xs text-red-400 font-mono">0x100A</span>

                {/* Connection Beam */}
                <svg className="absolute top-4 left-0 w-full h-full pointer-events-none overflow-visible">
                   <motion.path
                     d="M 100 10 L -150 -100" // Rough coordinates to 0x100A
                     stroke="#ef4444"
                     strokeWidth="2"
                     strokeDasharray="5,5"
                     fill="none"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1, delay: 0.5 }}
                   />
                </svg>
             </div>

             <div className="mt-8 text-center text-slate-600 text-xs italic">
                (Empty Class Shell)
             </div>
          </motion.div>
       </div>
    </div>
  )
}

function InheritancePhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
        {/* The Class Object at 0x8000 */}
        <div className="w-56 h-72 bg-slate-800 border-2 border-slate-500 rounded-lg relative shadow-xl flex flex-col">
           <div className="absolute -top-6 left-0 text-slate-400 font-mono text-xs">Address: 0x8000</div>

           <div className="p-4 space-y-4 mt-8">
              {/* tp_new */}
              <div className="relative">
                 <div className="text-[10px] text-slate-500 mb-1">tp_new (Creator)</div>
                 <div className="h-8 bg-slate-900 border border-dashed border-slate-600 rounded flex items-center px-2 text-xs text-slate-400">
                    <motion.span
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-blue-400 font-bold flex items-center gap-2"
                    >
                      <Box size={12} /> object_new
                    </motion.span>
                 </div>
              </div>

              {/* tp_init */}
              <div className="relative">
                 <div className="text-[10px] text-slate-500 mb-1">tp_init (Initializer)</div>
                 <div className="h-8 bg-slate-900 border border-dashed border-slate-600 rounded flex items-center px-2 text-xs text-slate-400">
                    <motion.span
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 }}
                      className="text-green-400 font-bold flex items-center gap-2"
                    >
                      <Play size={12} /> object_init
                    </motion.span>
                 </div>
              </div>

              {/* tp_dict */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.5 }}
                 className="mt-4 pt-4 border-t border-slate-700"
              >
                 <div className="text-[10px] text-slate-500 mb-1">tp_dict (Namespace)</div>
                 <div className="grid grid-cols-4 gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-6 bg-slate-900 rounded border border-slate-700" />
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Source Template Animation (Abstract) */}
        <motion.div
           className="absolute right-10 top-20 text-center opacity-50"
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.5 }}
           transition={{ delay: 0.2 }}
        >
           <div className="w-16 h-20 border border-slate-400 rounded bg-slate-800 flex items-center justify-center">
              Base<br/>Object
           </div>
        </motion.div>
    </div>
  )
}

function InstancePhase() {
  return (
    <div className="w-full h-full relative p-4">
       {/* Class Definition (Top) */}
       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-slate-600 bg-slate-800 rounded opacity-50 flex flex-col items-center justify-center">
          <div className="text-xs text-slate-400">Class `person` (0x8000)</div>
          <div className="flex gap-2 mt-2">
             <div className="w-6 h-6 bg-blue-900/50 rounded flex items-center justify-center border border-blue-800"><Box size={12} className="text-blue-400"/></div>
             <div className="w-6 h-6 bg-green-900/50 rounded flex items-center justify-center border border-green-800"><Play size={12} className="text-green-400"/></div>
          </div>
       </div>

       {/* The Call */}
       <motion.div
         className="absolute top-32 left-10 text-emerald-400 font-mono text-sm"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
       >
         call person()
       </motion.div>

       {/* Mechanical Arms Animation - Simplified as moving icons */}
       <div className="absolute top-40 left-1/2 -translate-x-1/2">
          {/* Step A: Allocation */}
          <motion.div
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 60, opacity: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex flex-col items-center"
          >
             <div className="text-[10px] text-blue-400 mb-1">tp_new</div>
             <ArrowRight className="rotate-90 text-blue-500 mb-2" />
          </motion.div>

          {/* The Instance */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: 'spring' }}
            className="mt-40 w-32 h-32 bg-slate-800 border-2 border-emerald-500 rounded-xl relative shadow-[0_0_20px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center"
          >
             <div className="absolute -left-20 top-0 text-slate-500 font-mono text-xs">0x9050</div>
             <div className="text-emerald-400 font-bold">Instance</div>

             {/* Type Pointer */}
             <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1">
                ob_type: <span className="text-slate-300">0x8000</span>
             </div>

             {/* Init Flash */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 1, 0] }}
               transition={{ delay: 2.5, duration: 0.5 }}
               className="absolute inset-0 bg-green-500/20 rounded-xl"
             />
          </motion.div>
       </div>
    </div>
  )
}
