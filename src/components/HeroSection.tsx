import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="gradient-orb w-[500px] h-[500px] bg-primary top-20 -right-40" />
      <div className="gradient-orb w-[400px] h-[400px] bg-[hsl(260,80%,55%)] -bottom-20 -left-20" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Open to opportunities</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
              Shubham
              <br />
              Uday <span className="gradient-text text-glow">Gotad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
              Computer Engineering Student & Aspiring Software Developer — building thoughtful digital experiences with clean code.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="group inline-flex h-12 px-8 items-center rounded-full bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/80 transition-all glow glow-hover"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download="Shubham_Gotad_Resume.pdf"
                className="group inline-flex h-12 px-8 items-center gap-2 rounded-full border border-primary/30 text-primary font-display font-semibold text-sm hover:bg-primary/10 transition-all btn-magnetic"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Find me</span>
              <div className="w-8 h-px bg-border" />
              {[
                { icon: Github, href: "https://github.com/shubhamgotad", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/shubham-gotad", label: "LinkedIn" },
                { icon: Mail, href: "mailto:gotadshubhamu@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Code terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              
              {/* Terminal window */}
              <div className="relative glass-card overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(45,80%,50%)]/70" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(140,60%,45%)]/70" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">~/shubham-gotad</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-relaxed space-y-1">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <span className="text-[hsl(260,80%,65%)]">const</span>{" "}
                    <span className="text-primary">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-muted-foreground">{"{"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <span className="text-muted-foreground ml-4">name:</span>{" "}
                    <span className="text-[hsl(140,60%,55%)]">'Shubham Gotad'</span><span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                    <span className="text-muted-foreground ml-4">role:</span>{" "}
                    <span className="text-[hsl(140,60%,55%)]">'Software Developer'</span><span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                    <span className="text-muted-foreground ml-4">skills:</span>{" "}
                    <span className="text-muted-foreground">[</span>
                    <span className="text-[hsl(30,90%,60%)]">'React'</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-[hsl(30,90%,60%)]">'C++'</span>
                    <span className="text-muted-foreground">, </span>
                    <span className="text-[hsl(30,90%,60%)]">'DSA'</span>
                    <span className="text-muted-foreground">],</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                    <span className="text-muted-foreground ml-4">passion:</span>{" "}
                    <span className="text-[hsl(140,60%,55%)]">'Building cool stuff'</span><span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                    <span className="text-muted-foreground ml-4">hireable:</span>{" "}
                    <span className="text-primary">true</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                    <span className="text-muted-foreground">{"}"}</span><span className="text-muted-foreground">;</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="pt-3 flex items-center gap-1"
                  >
                    <span className="text-[hsl(140,60%,55%)]">▶</span>{" "}
                    <span className="text-muted-foreground">Ready to collaborate</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
