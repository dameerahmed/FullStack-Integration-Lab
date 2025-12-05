import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleExpenseAdded = () => {
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-cyan-500/30 pb-20">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="pt-8 pb-6 px-6 text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Expense Manager
          </h1>
          <p className="text-gray-400 text-sm mt-1">Track your spending with style</p>
        </header>

        <main className="px-4">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'add-expense' && <AddExpenseForm onExpenseAdded={handleExpenseAdded} />}
        </main>

        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
