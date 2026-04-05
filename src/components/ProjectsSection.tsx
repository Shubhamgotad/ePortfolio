import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  title: string;
  tagline: string;
  color: string;
  accentColor: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  outcome: string;
}

const projects: CaseStudy[] = [
  {
    title: "Hospital Management System",
    tagline: "Streamlining healthcare operations through digital transformation",
    color: "from-primary/20 to-primary/5",
    accentColor: "bg-primary",
    overview: "A comprehensive system designed to manage patient records, doctor schedules, billing, and hospital inventory — all from one unified dashboard.",
    problem: "Traditional hospital workflows rely on paper-based records and fragmented systems, leading to inefficiencies, errors, and long patient wait times.",
    solution: "Built a centralized platform with modular components for patient registration, appointment booking, billing automation, and real-time bed availability tracking.",
    techStack: ["Python", "Java", "SQL", "HTML/CSS"],
    features: ["Patient record management", "Appointment scheduling", "Billing & invoicing", "Inventory tracking"],
    outcome: "Reduced average patient check-in time by streamlining registration workflows and providing doctors with instant access to patient history.",
  },
  {
    title: "Bus Route Planner",
    tagline: "Optimizing urban commute with intelligent route mapping",
    color: "from-[hsl(160,100%,40%)]/20 to-[hsl(160,100%,40%)]/5",
    accentColor: "bg-[hsl(160,100%,40%)]",
    overview: "An application that helps commuters find the most efficient bus routes between two locations using graph-based pathfinding algorithms.",
    problem: "City commuters often struggle to find optimal bus routes, especially with multi-transfer journeys, leading to wasted time and frustration.",
    solution: "Implemented shortest-path algorithms on a graph representation of the city bus network, with a clean UI for route visualization.",
    techStack: ["Python", "JavaScript", "Graph Algorithms"],
    features: ["Shortest path calculation", "Multi-stop route planning", "Visual route display", "Real-time search"],
    outcome: "Delivered an intuitive tool that calculates optimal routes in seconds, reducing average commuter planning time significantly.",
  },
  {
    title: "House Price Prediction",
    tagline: "Leveraging machine learning for smarter real estate decisions",
    color: "from-[hsl(280,80%,55%)]/20 to-[hsl(280,80%,55%)]/5",
    accentColor: "bg-[hsl(280,80%,55%)]",
    overview: "A predictive model that estimates house prices based on features like location, square footage, number of rooms, and neighborhood data.",
    problem: "Home buyers and sellers lack reliable tools to estimate fair market value, often leading to over- or under-pricing properties.",
    solution: "Trained regression models on real estate datasets, engineered features for accuracy, and wrapped the model in a user-friendly web interface.",
    techStack: ["Python", "Scikit-learn", "Pandas", "HTML/CSS"],
    features: ["Feature engineering", "Linear & polynomial regression", "Interactive prediction form", "Data visualization"],
    outcome: "Achieved strong predictive accuracy on test data, providing users with quick and reliable property value estimates.",
  },
];

const CaseStudyCard = ({ project, index }: { project: CaseStudy; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card overflow-hidden group"
    >
      {/* Hero banner */}
      <div className={`relative h-48 md:h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 0.08 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[8rem] md:text-[12rem] font-bold text-foreground select-none"
        >
          0{index + 1}
        </motion.span>
        {/* Floating accent */}
        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${project.accentColor} opacity-60`} />
      </div>

      <div className="p-8 md:p-12 space-y-10">
        {/* Title */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-primary/80 font-medium text-lg">{project.tagline}</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/50">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Overview / Problem / Solution */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Overview", text: project.overview },
            { label: "Problem", text: project.problem },
            { label: "Solution", text: project.solution },
          ].map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                {block.label}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">{block.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="separator-line" />

        {/* Tech Stack + Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Key Features
            </p>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor} shrink-0`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="separator-line" />

        {/* Outcome */}
        <div className="relative">
          <p className="text-primary font-display text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Results & Outcome
          </p>
          <p className="text-foreground text-lg leading-relaxed font-medium">{project.outcome}</p>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="separator-line mb-24" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Selected <span className="gradient-text">case studies</span>
            </h2>
          </div>
          <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
            Each project represents a unique challenge solved with thoughtful engineering.
          </p>
        </motion.div>
        <div className="space-y-16">
          {projects.map((p, i) => (
            <CaseStudyCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
