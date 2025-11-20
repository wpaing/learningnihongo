import React, { useState, useEffect } from 'react';
import { User, Save, Bell, Target } from 'lucide-react';
import { UserSettings } from '../types';

export const Profile = () => {
  const [settings, setSettings] = useState<UserSettings>({
    name: 'Guest Student',
    level: 'N4',
    dailyGoal: 20,
    notifications: true
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('kanji_user_settings');
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('kanji_user_settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
       <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Your Profile</h2>
            <p className="text-gray-500 text-sm mt-1 font-mm">သင်၏ လေ့လာမှုမှတ်တမ်းကို ပြင်ဆင်ပါ။</p>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 ring-4 ring-orange-50">
                   <User size={56} />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-1">{settings.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    JLPT {settings.level} Target
                </span>
             </div>
          </div>

          <div className="md:col-span-2 space-y-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                   <User size={20} className="text-orange-500" /> Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                         type="text"
                         value={settings.name}
                         onChange={(e) => setSettings({...settings, name: e.target.value})}
                         className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Target Level</label>
                      <select
                          value={settings.level}
                          onChange={(e) => setSettings({...settings, level: e.target.value})}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      >
                          <option value="N5">N5 (Beginner)</option>
                          <option value="N4">N4 (Basic)</option>
                          <option value="N3">N3 (Intermediate)</option>
                      </select>
                   </div>
                </div>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
                   <Target size={20} className="text-orange-500" /> Study Goals
                </h3>
                <div className="space-y-6">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Daily Word Goal: {settings.dailyGoal}</label>
                      <input
                         type="range"
                         min="5"
                         max="50"
                         step="5"
                         value={settings.dailyGoal}
                         onChange={(e) => setSettings({...settings, dailyGoal: Number(e.target.value)})}
                         className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                   </div>
                   
                   <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500">
                            <Bell size={20} />
                         </div>
                         <div>
                             <span className="text-sm font-bold text-gray-900 block">Daily Reminders</span>
                             <span className="text-xs text-gray-500">Get notified to study every day</span>
                         </div>
                      </div>
                      <button
                         onClick={() => setSettings({...settings, notifications: !settings.notifications})}
                         className={`w-12 h-7 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${settings.notifications ? 'bg-orange-500' : 'bg-gray-200'}`}
                      >
                         <div className={`w-5 h-5 bg-white rounded-full absolute top-1 shadow-sm transition-transform duration-200 ${settings.notifications ? 'left-6' : 'left-1'}`} />
                      </button>
                   </div>
                </div>
             </div>

             <div className="flex justify-end pt-2">
                 <button
                   onClick={handleSave}
                   className={`px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 ${saved ? 'bg-green-500' : 'bg-gray-900 hover:bg-gray-800'}`}
                 >
                   <Save size={18} />
                   {saved ? 'Saved!' : 'Save Settings'}
                 </button>
             </div>
          </div>
       </div>
    </div>
  );
};