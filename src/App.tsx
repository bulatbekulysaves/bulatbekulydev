import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

// Объект для координат мыши
const mousePosition = { x: 0, y: 0 };

// Гармоничный живой фон
function ComplexBackground() {
  const followLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const followLight = followLightRef.current;
    if (!followLight) return;

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    const ticker = gsap.ticker.add(() => {
      gsap.to(followLight, {
        x: mousePosition.x - 400,
        y: mousePosition.y - 400,
        duration: 0.8,
        ease: 'power1.out',
      });
    });

    const updateMouseCoords = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    window.addEventListener('mousemove', updateMouseCoords);

    return () => {
      window.removeEventListener('mousemove', updateMouseCoords);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 opacity-100">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[160px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 75%)',
            top: '-20%',
            left: '-10%',
          }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, transparent 70%)',
            bottom: '-10%',
            right: '-5%',
          }}
        ></div>
        <div 
          className="absolute w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            top: '30%',
            left: '30%',
          }}
        ></div>
      </div>

      <div 
        className="absolute inset-0 opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      ></div>

      <div 
        ref={followLightRef}
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(15, 118, 110, 0.14) 0%, rgba(15, 118, 110, 0.06) 45%, transparent 70%)',
          transform: 'translate(-400px, -400px)',
        }}
      ></div>
    </div>
  );
}

export default function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    // Анимация появления секций
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          },
        }
      );
    });

    // Отслеживаем приближение курсора к верху экрана (первые 60 пикселей)
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 60) {
        setIsNavVisible(true);
      } else if (e.clientY > 140) {
        // Убираем меню обратно, когда курсор уходит ниже 140px
        setIsNavVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black relative w-full overflow-x-hidden">
      
      {/* Скрываемое меню с плавной анимацией выезда сверху */}
      <header 
        className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500 ease-out pointer-events-none ${
          isNavVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`}
      >
        <nav className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 rounded-full px-6 py-2.5 flex items-center gap-6 text-sm font-medium text-zinc-300 shadow-2xl shadow-black/80 pointer-events-auto">
          <a href="#hero" className="hover:text-emerald-400 transition-colors">Главная</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Навыки</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Проекты</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Опыт</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Контакты</a>
        </nav>
      </header>

      {/* Фоновый живой слой */}
      <ComplexBackground />

      {/* Основной контент */}
      <main className="relative z-10 pt-20 max-w-5xl mx-auto px-6 sm:px-8 space-y-16 pb-24">
        <Hero />
        <div className="animate-on-scroll"><Skills /></div>
        <div className="animate-on-scroll"><Projects /></div>
        <div className="animate-on-scroll"><Experience /></div>
        <div className="animate-on-scroll"><Contact /></div>
      </main>
    </div>
  );
}