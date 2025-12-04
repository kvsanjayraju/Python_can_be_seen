import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Cpu, Box, ArrowRight, Settings, Play, Truck, Anchor, Scissors, Tag, Hammer, Zap, ScanLine, CheckCircle, Copy } from 'lucide-react';

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
       {/* Dark Void - Implicit in background */}

       {/* OS Truck */}
       <motion.div
         initial={{ x: 300, opacity: 1 }}
         animate={{ x: -50, opacity: 0 }} // Drives in then leaves
         transition={{ duration: 2, times: [0, 1] }}
         className="absolute top-20 right-0 z-20"
       >
         <Truck size={64} className="text-slate-400" />
         <div className="text-[10px] text-center bg-slate-700 rounded px-1">OS Loader</div>
       </motion.div>

       {/* Memory Segment */}
       <div className="relative mt-12 w-64 h-80 border-2 border-slate-700 rounded-lg bg-slate-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
          <div className="bg-slate-800 p-2 text-center text-slate-400 text-xs border-b border-slate-700">RAM: .data segment</div>

          <div className="flex-1 p-4 relative">
             {/* 0x100A Address Marker */}
             <div className="absolute top-20 left-2 text-slate-600 font-mono text-[10px]">0x100A</div>

             {/* Anchor Drop */}
             <motion.div
               initial={{ y: -200, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 1, type: 'spring', bounce: 0.2 }} // Drops after truck arrives
               className="absolute top-16 left-16 flex flex-col items-center"
             >
                <div className="w-24 h-24 bg-red-900/20 border-2 border-red-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                    <Anchor size={48} className="text-red-500" />
                </div>
                <div className="text-red-400 font-bold text-center mt-2">PyType_Type</div>
                <div className="text-slate-500 text-[10px] uppercase">The Anchor</div>
             </motion.div>

             {/* Metallic Clank Effect (Visual Ripple) */}
             <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-28 left-28 w-10 h-10 border border-white rounded-full"
             />
          </div>
       </div>
    </div>
  )
}

function CompilationPhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-4">
          {/* Input Text */}
          <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             exit={{ scale: 0, opacity: 0 }}
             className="bg-slate-800 p-4 rounded-lg border border-slate-600 font-mono text-emerald-400 w-40 text-center"
          >
            class person:
          </motion.div>

          <ArrowRight className="text-slate-600" />

          {/* Shredder */}
          <div className="relative flex flex-col items-center">
             <Scissors size={40} className="text-slate-500 mb-2" />
             <div className="text-[10px] text-slate-500">Parser/Shredder</div>
          </div>

          <ArrowRight className="text-slate-600" />
      </div>

      {/* Output Area */}
      <div className="flex gap-12 items-end h-32">
         {/* Gear */}
         <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-20 h-20 rounded-full border-4 border-dashed border-amber-500 flex items-center justify-center bg-slate-800 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            >
              <Settings className="text-amber-400" size={40} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-amber-400 font-bold bg-slate-800 px-2 rounded"
            >
              Opcode 71
            </motion.div>
         </div>

         {/* Name Tag on Stack */}
         <div className="flex flex-col items-center gap-2">
             <div className="w-24 h-32 border-b-4 border-x-4 border-slate-600 rounded-b-lg relative flex flex-col-reverse p-2 gap-2 bg-slate-900/50">
                 <motion.div
                   initial={{ y: -100, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 2, type: 'spring' }}
                   className="w-full h-12 bg-purple-900/50 border border-purple-500 rounded flex items-center justify-center text-purple-300 font-mono text-xs shadow-lg"
                 >
                   <Tag size={14} className="mr-2" /> 'person'
                 </motion.div>
             </div>
             <span className="text-slate-500 text-xs uppercase">Stack</span>
         </div>
      </div>
    </div>
  )
}

function AllocationPhase() {
  return (
    <div className="w-full h-full relative">
       {/* Anchor Reference */}
       <div className="absolute top-4 left-4 opacity-30">
          <Anchor size={32} className="text-red-500" />
          <div className="text-[10px] text-red-500">0x100A</div>
       </div>

       {/* Crane Animation */}
       <motion.div
          className="absolute top-0 right-1/4 z-10"
          initial={{ y: -200 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
       >
          <div className="flex flex-col items-center">
             <div className="w-1 h-32 bg-yellow-500" /> {/* Cable */}
             <Hammer size={32} className="text-yellow-500" /> {/* Hook/Crane */}
          </div>
       </motion.div>

       {/* The New Class Object */}
       <div className="absolute inset-0 flex items-center justify-center pt-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }} // Appears after crane descends
            className="w-48 h-56 bg-slate-800 border-4 border-slate-600 rounded-lg relative shadow-2xl"
          >
             <div className="absolute -top-6 left-0 text-slate-400 font-mono text-xs">0x8000</div>

             <div className="h-full flex flex-col items-center justify-center text-slate-500">
                <Box size={48} className="opacity-20" />
                <div className="text-xs mt-2">Class Container</div>
             </div>

             {/* Connection Wire */}
             <div className="absolute top-0 left-0 w-full h-full">
                 {/* Spark */}
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 1, 0] }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute top-2 left-2"
                 >
                    <Zap size={24} className="text-yellow-400 fill-yellow-400" />
                 </motion.div>

                 {/* Wire to 0x100A */}
                 <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
                   <motion.path
                     d="M 20 20 L -120 -100" // Connect to Anchor
                     stroke="#ef4444"
                     strokeWidth="3"
                     strokeDasharray="4,4"
                     fill="none"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1, delay: 1.5 }}
                   />
                 </svg>
             </div>
          </motion.div>
       </div>
    </div>
  )
}

function InheritancePhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
        {/* Parts Bin */}
        <div className="absolute top-10 right-10 flex flex-col gap-2 opacity-50">
            <div className="text-[10px] text-slate-500 uppercase">Parts Bin</div>
            <div className="p-2 border border-slate-600 rounded bg-slate-900 flex gap-2">
                <Settings size={16} className="text-blue-400" />
                <Play size={16} className="text-green-400" />
            </div>
        </div>

        {/* The Class Object at 0x8000 */}
        <div className="w-56 h-72 bg-slate-800 border-4 border-slate-600 rounded-lg relative shadow-xl flex flex-col p-4">
           <div className="absolute -top-6 left-0 text-slate-400 font-mono text-xs">0x8000</div>

           <div className="text-center mb-4 text-slate-500 text-xs">Class Blueprint</div>

           <div className="space-y-6">
              {/* tp_new Slot */}
              <div className="bg-slate-900 p-2 rounded border border-dashed border-slate-700 relative overflow-hidden">
                 <div className="text-[10px] text-slate-500 mb-1">Creator Slot (tp_new)</div>
                 {/* Animated Part Installation */}
                 <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="flex items-center gap-2 text-blue-400 font-bold bg-blue-900/20 p-1 rounded"
                 >
                    <Copy size={14} /> object_new
                 </motion.div>
              </div>

              {/* tp_init Slot */}
              <div className="bg-slate-900 p-2 rounded border border-dashed border-slate-700 relative overflow-hidden">
                 <div className="text-[10px] text-slate-500 mb-1">Starter Slot (tp_init)</div>
                 {/* Animated Part Installation */}
                 <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0, type: 'spring' }}
                    className="flex items-center gap-2 text-green-400 font-bold bg-green-900/20 p-1 rounded"
                 >
                    <Copy size={14} /> object_init
                 </motion.div>
              </div>
           </div>

           {/* Sparks */}
           <motion.div
             className="absolute inset-0 flex items-center justify-center pointer-events-none"
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1, 0] }}
             transition={{ delay: 1.2, duration: 0.3 }}
           >
              <Zap size={64} className="text-yellow-400" />
           </motion.div>
        </div>
    </div>
  )
}

function InstancePhase() {
  return (
    <div className="w-full h-full relative p-4 flex flex-col items-center">
       {/* Run Button */}
       <motion.button
         whileTap={{ scale: 0.9 }}
         animate={{ scale: [1, 1.05, 1] }}
         transition={{ repeat: Infinity, duration: 2 }}
         className="absolute top-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg z-20"
       >
         <Play size={24} fill="currentColor" />
       </motion.button>

       <div className="absolute top-4 right-20 text-emerald-500 font-mono text-xs mt-3">person()</div>

       {/* Factory 0x8000 */}
       <div className="mt-8 w-40 h-24 bg-slate-800 border-4 border-slate-600 rounded-lg flex items-center justify-center relative">
          <div className="text-xs text-slate-500">Factory 0x8000</div>
          {/* Rumble animation */}
          <motion.div
             animate={{ x: [-1, 1, -1] }}
             transition={{ repeat: Infinity, duration: 0.1 }}
             className="absolute inset-0 border-2 border-emerald-500/30 rounded-lg"
          />
       </div>

       {/* Conveyor Belt */}
       <div className="w-2 h-20 bg-slate-700 relative my-2">
          <motion.div
             className="w-full h-full bg-slate-600"
             animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
             style={{ backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.1) 50%)', backgroundSize: '100% 20px' }}
             transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
       </div>

       {/* Instance Box on Conveyor */}
       <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-32 bg-slate-800 border-2 border-slate-500 rounded-xl relative shadow-lg flex flex-col items-center justify-center mb-4"
       >
          <div className="absolute -left-12 top-0 text-slate-500 font-mono text-xs">0x9050</div>

          <Box size={32} className="text-slate-600 mb-2" />
          <div className="text-xs text-slate-400">Empty Body</div>

          {/* Scanner Bar */}
          <motion.div
             className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
             animate={{ top: ["0%", "100%", "0%"] }}
             transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
          />

          {/* Stamp Approval */}
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2.5, type: 'spring' }}
            className="absolute inset-0 bg-green-900/80 rounded-xl flex items-center justify-center backdrop-blur-sm"
          >
             <div className="flex flex-col items-center text-green-400">
                <CheckCircle size={40} />
                <span className="font-bold text-sm mt-1 uppercase border-2 border-green-400 px-2 rounded -rotate-12">Approved</span>
             </div>
          </motion.div>
       </motion.div>
    </div>
  )
}
