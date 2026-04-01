import React from 'react';

function App() {
  return (
    <div className="bg-background text-on-background font-body mesh-gradient-bg min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/60 dark:bg-black/60 backdrop-blur-[20px] border-b border-white/15 shadow-[0_20_40px_rgba(60,45,40,0.06)]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black text-slate-900 dark:text-white font-['Inter'] tracking-tight display-lg">
            Agents &amp; APIs Paris
          </h1>
          <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#ac3500]">
            Monsieur Maillot, Tonight
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#ac3500] cursor-pointer hover:opacity-80 transition-opacity active:scale-95 duration-200" data-icon="location_on">
            location_on
          </span>
        </div>
      </header>

      <main className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-[3.5rem] font-black leading-[1.1] tracking-tight text-slate-900 mb-2">Agenda</h2>
          <div className="w-12 h-1 bg-primary-container rounded-full"></div>
        </div>

        {/* Agenda Grid */}
        <div className="space-y-8">
          {/* Session 1 */}
          <div className="glass-card bg-white/70 border border-white/40 p-6 rounded-xl shadow-[0_20px_40px_rgba(60,45,40,0.06)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/10">
                <span className="text-[0.75rem] font-bold text-primary tracking-wider font-['Inter'] uppercase">
                  18:30
                </span>
              </div>
              <span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">
                auto_awesome
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">
              Cyrena Ramdani
            </h3>
            <p className="text-sm font-medium text-slate-600">AI Solutions Specialist, Google Cloud</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Google Cloud Technical Session
              </span>
            </div>
          </div>

          {/* Session 2 */}
          <div className="glass-card bg-white/70 border border-white/40 p-6 rounded-xl shadow-[0_20px_40px_rgba(60,45,40,0.06)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/10">
                <span className="text-[0.75rem] font-bold text-primary tracking-wider font-['Inter'] uppercase">
                  19:00
                </span>
              </div>
              <span className="material-symbols-outlined text-secondary" data-icon="deployed_code">
                deployed_code
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">
              Simon Lebrun
            </h3>
            <p className="text-sm font-medium text-slate-600">Product Manager, Google Cloud</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                API Ecosystems &amp; Strategy
              </span>
            </div>
          </div>

          {/* Session 3 */}
          <div className="glass-card bg-white/70 border border-white/40 p-6 rounded-xl shadow-[0_20px_40px_rgba(60,45,40,0.06)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/10">
                <span className="text-[0.75rem] font-bold text-primary tracking-wider font-['Inter'] uppercase">
                  19:30
                </span>
              </div>
              <span className="material-symbols-outlined text-primary" data-icon="api">
                api
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">
              Yacine Kheddache
            </h3>
            <p className="text-sm font-medium text-slate-600">
              Co-founder of Microcks &amp; Director of Product Strategy &amp; Innovation, Postman
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                The Future of Mocking &amp; APIs
              </span>
            </div>
          </div>

          {/* Session 4 */}
          <div className="glass-card bg-white/70 border border-white/40 p-6 rounded-xl shadow-[0_20px_40px_rgba(60,45,40,0.06)] hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/10">
                <span className="text-[0.75rem] font-bold text-primary tracking-wider font-['Inter'] uppercase">
                  20:00
                </span>
              </div>
              <span className="material-symbols-outlined text-primary" data-icon="terminal">
                terminal
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-primary transition-colors">
              Gbadebo Bello
            </h3>
            <p className="text-sm font-medium text-slate-600">Developer Advocate, Postman</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                Agentic Workflows in Action
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-[20px] border-t border-white/15 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[1.5rem]">
        <a className="flex flex-col items-center justify-center text-[#ff6c37] bg-[#ff6c37]/10 rounded-2xl px-4 py-1 active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined" data-icon="calendar_today">
            calendar_today
          </span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-bold">Agenda</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 hover:text-[#4d8efe] transition-colors active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined" data-icon="record_voice_over">
            record_voice_over
          </span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-bold">Speakers</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 hover:text-[#4d8efe] transition-colors active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined" data-icon="diversity_3">
            diversity_3
          </span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-bold">Icebreaker</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400 hover:text-[#4d8efe] transition-colors active:scale-90 transition-transform" href="#">
          <span className="material-symbols-outlined" data-icon="sensors">
            sensors
          </span>
          <span className="font-['Inter'] text-[10px] uppercase tracking-[0.05em] font-bold">Live Wall</span>
        </a>
      </nav>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40">
        <span className="material-symbols-outlined" data-icon="add" style={{ fontVariationSettings: "'FILL' 1" }}>
          add
        </span>
      </button>
    </div>
  );
}

export default App;
