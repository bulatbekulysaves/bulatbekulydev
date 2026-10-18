export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "HTML5 / CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & Инструменты",
      skills: ["Node.js (базовый)", "REST API", "Git / GitHub", "GSAP", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-16 border-t border-zinc-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Мой стек технологий</h2>
        <p className="text-zinc-400 text-sm">Инструменты, с которыми я работаю</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6">
            <h3 className="text-base font-semibold text-emerald-400 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span key={i} className="bg-zinc-800/70 border border-zinc-700/40 text-zinc-200 text-xs font-medium px-3 py-1.5 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}