
import React from 'react';
import { Target, Code, Mail, Phone, Globe, Heart, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-indigo-600">
            <GraduationCap size={32} />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-slate-900">About Kanji Master</h2>
            <p className="text-slate-500 font-mm">ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်နှင့် ဖန်တီးသူ</p>
        </div>
      </div>

      {/* Goal Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
         
         <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/10 shadow-inner">
                    <Target size={28} className="text-indigo-50" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Our Goal</h3>
            </div>
            <div className="space-y-4">
                <p className="text-indigo-50 leading-relaxed text-lg font-medium">
                    To empower Myanmar students with an accessible, modern, and effective tool for mastering Japanese JLPT N4 and N5 levels using interactive technology.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-white font-mm leading-relaxed">
                        မြန်မာကျောင်းသား/သူများအတွက် ဂျပန်စာ N4 နှင့် N5 အဆင့်များကို ခေတ်မီနည်းပညာ အကူအညီဖြင့် လွယ်ကူထိရောက်စွာ လေ့လာမှတ်သားနိုင်စေရန် ရည်ရွယ်ပါသည်။
                    </p>
                </div>
            </div>
         </div>
      </div>

      {/* Developer Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
         <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                <Code size={28} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900">Developer Team</h3>
                <p className="text-slate-500 text-sm">Built with passion & precision</p>
            </div>
         </div>

         <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Card */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                
                {/* Developer Image */}
                <div className="w-32 h-32 rounded-full mb-4 overflow-hidden shadow-xl ring-4 ring-white relative z-10 bg-slate-200">
                   <img 
                    src="/profile.jpg" 
                    onError={(e) => {
                        // Fallback to a high-quality placeholder if local image isn't found
                        e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                    alt="Win Paing Soe" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                   />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-1">Win Paing Soe</h4>
                <p className="text-indigo-600 text-sm font-medium mb-4">Lead Developer</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full shadow-sm">
                    <Globe size={12} /> Myanmar
                </span>
            </div>

            {/* Contact Info */}
            <div className="flex-1 space-y-6 w-full">
                <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                    Contact Information
                    <span className="h-px flex-1 bg-slate-100 ml-4"></span>
                </h4>
                
                <div className="space-y-4">
                    <a href="mailto:sysadm.winpaingsoe@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all group border border-slate-100 hover:border-blue-100">
                        <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Mail size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email Address</p>
                            <p className="text-slate-900 font-medium font-mono text-sm sm:text-base truncate">sysadm.winpaingsoe@gmail.com</p>
                        </div>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-all group border border-slate-100 hover:border-emerald-100">
                            <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Thailand</p>
                                <p className="text-slate-900 font-medium font-mono text-sm">+66 61 9623 368</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-all group border border-slate-100 hover:border-emerald-100">
                            <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Myanmar</p>
                                <p className="text-slate-900 font-medium font-mono text-sm">+95 9 790 430 242</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
      
      <div className="text-center pt-8 pb-4 text-slate-400 text-sm flex items-center justify-center gap-2">
        <span>Made with</span>
        <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
        <span>for Education</span>
      </div>
    </div>
  );
};
