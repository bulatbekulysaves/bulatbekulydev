export default function Projects() {
  const projectsList = [
    {
      title: "Система автоматизации КСК / ОСИ",
      description: "Учебный проект для управления жилищными кооперативами: генерация квитанций, обработка обращений жильцов и простая работа с локальными LLM.",
      tech: ["React", "Node.js", "Tailwind CSS", "Ollama"],
      tag: "Основной проект"
    },
    {
      title: "Персональное портфолио",
      description: "Сайт-визитка с адаптивным дизайном, чистой компонентной структурой и плавными анимациями появления элементов.",
      tech: ["React", "TypeScript", "Vite", "GSAP"],
      tag: "Пет-проект"
    }
  ];

  return (
    <section id="projects" className="py-12 border-t border-zinc-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Проекты</h2>
        <p className="text-zinc-400 text-sm">Практические работы</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-xl shadow-black/20"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono bg-zinc-800/80 text-zinc-300 px-2.5 py-1 rounded-md border border-zinc-700/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}