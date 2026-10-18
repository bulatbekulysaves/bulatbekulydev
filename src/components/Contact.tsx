export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-zinc-900 text-center">
      <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
        
        {/* Мягкий декор внутри карточки */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>

        <h2 className="text-3xl font-bold mb-3">Давайте свяжемся!</h2>
        <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Я открыт к предложениям о стажировке или позиции Junior Frontend разработчика. Буду рад обсудить проекты и сотрудничество!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/bulatbekulysaves"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 text-sm font-medium px-6 py-3.5 rounded-xl transition-all border border-zinc-700/50 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a
            href="mailto:bulatbekuly@proton.me"
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            bulatbekuly@proton.me
          </a>
        </div>
      </div>
    </section>
  );
}