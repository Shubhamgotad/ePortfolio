import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Brain, Database, Terminal, Cpu } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "C", "C++", "DSA"],
    description: "Strong foundations in OOP, data structures, and algorithmic thinking.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description: "Building responsive, accessible interfaces with modern standards.",
    gradient: "from-[hsl(160,100%,40%)]/20 to-[hsl(160,100%,40%)]/5",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Scikit-learn", "Pandas", "NumPy"],
    description: "Exploring supervised learning, regression models, and data pipelines.",
    gradient: "from-[hsl(280,80%,55%)]/20 to-[hsl(280,80%,55%)]/5",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["SQL", "MySQL"],
    description: "Designing schemas, writing queries, and managing relational data.",
    gradient: "from-[hsl(40,100%,50%)]/20 to-[hsl(40,100%,50%)]/5",
  },
  {
    icon: Terminal,
    title: "Dev Tools",
    skills: ["Git", "VS Code", "Linux"],
    description: "Version control, development environments, and CLI workflows.",
    gradient: "from-[hsl(340,80%,55%)]/20 to-[hsl(340,80%,55%)]/5",
  },
  {
    icon: Cpu,
    title: "Core CS",
    skills: ["DSA", "OS", "Networks"],
    description: "Solid understanding of computer science fundamentals.",
    gradient: "from-[hsl(220,80%,55%)]/20 to-[hsl(220,80%,55%)]/5",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="separator-line mb-24" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tools & <span className="gradient-text">technologies</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/80 border border-border/50 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
