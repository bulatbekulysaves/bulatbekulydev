import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="py-20 sm:py-28 flex flex-col justify-center items-center text-center">
      {/* Плашку полностью убрали, оставив чистый воздух и сразу фокус на имени */}
      
      <h1 className="hero-anim text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-3xl">
        Привет, я <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">Булатбекулы Ринат</span>
      </h1>
      
      <p className="hero-anim text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-normal">
        Начинающий фронтенд-разработчик. Пишу код на <span className="text-zinc-200 font-medium">React</span> и <span className="text-zinc-200 font-medium">TypeScript</span>, создаю удобные интерфейсы и изучаю веб-разработку.
      </p>
      
      <div className="hero-anim flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          Посмотреть проекты
        </a>
        <a
          href="#contact"
          className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-slate-700 text-zinc-300 text-sm font-medium px-7 py-3.5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Связаться со мной
        </a>
      </div>
    </section>
  );
}