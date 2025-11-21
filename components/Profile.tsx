
import React from 'react';
import { User as UserIcon, Bell, Target, Check, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Profile = () => {
  const { user, updateProfile } = useAuth();

  if (!user) return <div>Loading...</div>;

  const handleChange = (field: string, value: any) => {
    updateProfile({ [field]: value });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
       <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Your Profile</h2>
            <p className="text-gray-500 text-sm mt-1 font-mm">သင်၏ အချက်အလက်များသည် အလိုအလျောက် သိမ်းဆည်းပါသည်။ (Auto-saved)</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
             <Check size={14} />
             <span>Changes saved</span>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-6 ring-4 ring-indigo-50 relative overflow-hidden">
                   {user.avatar ? (
                       <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                   ) : (
                       <UserIcon size={56} />
                   )}
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1">{user.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                        JLPT {user.level}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                        <Zap size={12} className="mr-1 fill-orange-800" /> {user.dailyGoal} / day
                    </span>
                </div>
             </div>
          </div>

          <div className="md:col-span-2 space-y-6">
             {/* Personal Details Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                   <UserIcon size={20} className="text-indigo-500" /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Display Name</label>
                      <input
                         type="text"
                         value={user.name}
                         onChange={(e) => handleChange('name', e.target.value)}
                         className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all bg-gray-50 focus:bg-white font-medium text-gray-900"
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Target Level</label>
                      <div className="relative">
                          <select
                              value={user.level}
                              onChange={(e) => handleChange('level', e.target.value)}
                              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer font-medium text-gray-900"
                          >
                              <option value="N5">N5 (Beginner)</option>
                              <option value="N4">N4 (Basic)</option>
                              <option value="N3">N3 (Intermediate)</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                      </div>
                   </div>
                   <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input
                         type="email"
                         value={user.email}
                         disabled
                         className="w-full px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-400 font-medium cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
                   </div>
                </div>
             </div>

             {/* Study Goals Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                   <Target size={20} className="text-indigo-500" /> Study Preferences
                </h3>
                <div className="space-y-8">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                          <label className="text-sm font-bold text-gray-700">Daily Word Goal</label>
                          <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-sm">{user.dailyGoal} words</span>
                      </div>
                      <input
                         type="range"
                         min="5"
                         max="50"
                         step="5"
                         value={user.dailyGoal}
                         onChange={(e) => handleChange('dailyGoal', Number(e.target.value))}
                         className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                          <span>Casual (5)</span>
                          <span>Intense (50)</span>
                      </div>
                   </div>
                   
                   <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-500">
                            <Bell size={20} />
                         </div>
                         <div>
                             <span className="text-sm font-bold text-gray-900 block">Study Reminders</span>
                             <span className="text-xs text-gray-500">Get encouraged to maintain your streak</span>
                         </div>
                      </div>
                      <button
                         onClick={() => handleChange('notifications', !user.notifications)}
                         className={`w-12 h-7 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${user.notifications ? 'bg-indigo-600' : 'bg-gray-200'}`}
                      >
                         <div className={`w-5 h-5 bg-white rounded-full absolute top-1 shadow-sm transition-transform duration-200 ${user.notifications ? 'left-6' : 'left-1'}`} />
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};
