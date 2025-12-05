import React from 'react';
import { LayoutDashboard, PlusCircle } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg z-50">
            <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'dashboard' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                    }`}
            >
                <LayoutDashboard size={24} />
                <span className="text-xs font-medium">Dashboard</span>
            </button>
            <button
                onClick={() => setActiveTab('add-expense')}
                className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'add-expense' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                    }`}
            >
                <PlusCircle size={24} />
                <span className="text-xs font-medium">Add Expense</span>
            </button>
        </nav>
    );
};

export default Navbar;
