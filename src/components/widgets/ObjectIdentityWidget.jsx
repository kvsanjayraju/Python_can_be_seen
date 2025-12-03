import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ObjectIdentityWidget() {
  const [items, setItems] = useState([
    { id: 'cup', label: 'Cup', identity: 'Cup #1', properties: ['Color: Red', 'Volume: 200ml'], actions: ['drink()', 'fill()'] },
    { id: 'user', label: 'User', identity: 'ID: 402', properties: ['Name: Alice', 'Email: a@b.com'], actions: ['login()', 'logout()'] },
    { id: 'bank', label: 'Bank Account', identity: 'Acct: 9931', properties: ['Owner: Bob', 'Balance: $500'], actions: ['deposit()', 'withdraw()'] },
    { id: 'car', label: 'Car', identity: 'VIN: XYZ...123', properties: ['Make: Toyota', 'Speed: 60mph'], actions: ['accelerate()', 'brake()'] }
  ]);

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const getIcon = (id) => {
    switch(id) {
      case 'cup': return '☕️';
      case 'user': return '👤';
      case 'bank': return '💰';
      case 'car': return '🚗';
      default: return '📦';
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-slate-700 mb-2">Connect Concepts</h3>
        <p className="text-slate-500">Select an object to see its structure.</p>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`px-4 py-2 rounded-xl font-bold transition-all text-sm ${
              selectedItem.id === item.id
                ? 'bg-brilliant-blue text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-brilliant-blue'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
         <div className="bg-slate-50 p-6 border-b border-slate-100 text-center">
             <div className="text-4xl mb-2">{getIcon(selectedItem.id)}</div>
             <div className="font-mono text-xs text-slate-400 uppercase tracking-widest">Object</div>
             <div className="text-2xl font-bold text-slate-800">{selectedItem.label}</div>
         </div>

         <div className="flex-1 p-6 space-y-6">
            <ConceptRow label="Identity" value={selectedItem.identity} color="bg-rose-100 text-rose-700" />
            <ConceptRow label="Properties" value={selectedItem.properties.join(', ')} color="bg-amber-100 text-amber-700" />
            <ConceptRow label="Actions" value={selectedItem.actions.join(', ')} color="bg-emerald-100 text-emerald-700" />
         </div>
      </div>
    </div>
  );
}

function ConceptRow({ label, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      key={value} // Re-animate on value change
      className="group"
    >
      <div className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</div>
      <div className={`p-4 rounded-xl font-medium ${color} transition-transform group-hover:scale-[1.02]`}>
        {value}
      </div>
    </motion.div>
  )
}
