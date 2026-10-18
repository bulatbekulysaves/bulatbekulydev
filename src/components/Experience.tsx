export default function Experience() {
  const experiences = [
    {
      period: "2023 — Наст. время",
      title: "ВКТУ им. Д. Серикбаева",
      role: "Студент 4 курса",
      specialty: "Математическое и компьютерное моделирование",
      description: "Глубокое изучение алгоритмов, структуры данных, математического моделирования и методов защиты информации. Сильная базовая фундаментальная подготовка, помогающая писать оптимальный и чистый код."
    },
    {
      period: "2026",
      title: "Разработка системы автоматизации КСК / ОСИ",
      role: "Frontend / Fullstack (Учебная практика)",
      specialty: "Веб-разработка & Интеграция LLM",
      description: "Проектирование и разработка пользовательского интерфейса на React, связь с Node.js бэкендом. Реализация модулей формирования квитанций, обработки заявок жильцов и базовой интеграции с локальными нейросетями (Ollama)."
    },
    {
      period: "2025 — Наст. время",
      title: "Фронтенд-разработка & Самообучение",
      role: "Pet-проекты & Практика",
      specialty: "React, TypeScript, Tailwind CSS, GSAP",
      description: "Изучение современного стека (React, TypeScript, Tailwind CSS), создание адаптивных интерфейсов, работа со сложными анимациями и сборкой с помощью Vite."
    }
  ];

  return (
    <section id="experience" className="py-12 border-t border-zinc-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Опыт и образование</h2>
        <p className="text-zinc-400 text-sm">Академическая база и практическая подготовка</p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl shadow-black/20 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {item.role}
                </span>
                <h3 className="text-xl font-bold mt-2 text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 px-3 py-1 rounded-lg border border-zinc-700/40 w-fit self-start sm:self-auto">
                {item.period}
              </span>
            </div>

            <p className="text-xs font-medium text-teal-300/80 mb-3">
              {item.specialty}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}