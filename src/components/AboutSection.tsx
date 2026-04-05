import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Rocket } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "Clean Code", value: "Advocate" },
  { icon: Target, label: "Focus", value: "Full-Stack" },
  { icon: Rocket, label: "Goal", value: "Impactful Products" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="separator-line mb-24" />
        <div ref={ref} className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-10">
              Driven by
              <br />
              <span className="gradient-text">curiosity</span>
            </h2>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{h.label}</p>
                    <p className="text-sm font-semibold text-foreground">{h.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Engineering student passionate about writing elegant, efficient code. From building full-stack web applications to exploring machine learning, I thrive at the intersection of <span className="text-foreground font-medium">problem-solving</span> and <span className="text-foreground font-medium">creativity</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My core strengths lie in <span className="text-primary font-medium">Python</span> and <span className="text-primary font-medium">Java</span>, complemented by a solid foundation in web technologies. I enjoy translating complex problems into intuitive, user-friendly solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to grow as a software developer who creates impactful, scalable products — blending clean architecture with modern design thinking.
            </p>

            {/* Decorative quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 pl-6 border-l-2 border-primary/50"
            >
              <p className="text-foreground font-display text-lg italic">
                "Code is poetry — every line should tell a story."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
