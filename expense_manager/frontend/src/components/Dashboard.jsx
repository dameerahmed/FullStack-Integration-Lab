import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Trash2, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExpenses = async () => {
        try {
            const response = await api.get('/expenses');
            setExpenses(response.data);
        } catch (err) {
            setError('Failed to fetch expenses.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this expense?')) return;
        try {
            await api.delete(`/expenses/${id}`);
            setExpenses(expenses.filter((expense) => expense.id !== id));
        } catch (err) {
            alert('Failed to delete expense.');
            console.error(err);
        }
    };

    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    if (loading) return <div className="text-center text-white mt-10">Loading expenses...</div>;
    if (error) return <div className="text-center text-red-400 mt-10">{error}</div>;

    return (
        <div className="w-full max-w-4xl mx-auto p-4 pb-24">
            {/* Summary Card */}
            <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8 text-white shadow-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-300 text-sm font-medium mb-1">Total Expenses</p>
                        <h2 className="text-4xl font-bold">${totalAmount.toFixed(2)}</h2>
                    </div>
                    <div className="bg-white/10 p-3 rounded-full">
                        <TrendingUp size={32} className="text-cyan-400" />
                    </div>
                </div>
            </div>

            {/* Expenses List */}
            <h3 className="text-xl font-semibold text-white mb-4 ml-1">Recent Transactions</h3>

            <div className="space-y-3">
                {expenses.length === 0 ? (
                    <div className="text-center text-gray-500 py-10 bg-white/5 rounded-2xl border border-white/5">
                        No expenses found. Start adding some!
                    </div>
                ) : (
                    expenses.map((expense) => (
                        <div
                            key={expense.id}
                            className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-xl p-4 transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg border border-white/5">
                                    <DollarSign size={20} className="text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-lg">{expense.category}</h4>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                        <Calendar size={12} />
                                        <span>{expense.date}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold text-lg">
                                    -${expense.amount.toFixed(2)}
                                </span>
                                <button
                                    onClick={() => handleDelete(expense.id)}
                                    className="text-gray-500 hover:text-red-400 transition-colors p-2 hover:bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                                    title="Delete Expense"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
