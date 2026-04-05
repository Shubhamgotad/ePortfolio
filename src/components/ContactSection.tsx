import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gotadshubhamu@gmail.com",
    href: "mailto:gotadshubhamu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 86572 42456",
    href: "tel:+918657242456",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "shubham-gotad",
    href: "https://linkedin.com/in/shubham-gotad",
    external: true,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_o833s5c", "template_h1jxq0e", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, "P6s4vQ0P6IG4XVxuq");
      toast({ title: "Message sent! ✨", description: "Thanks for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="separator-line mb-24" />
        <div ref={ref} className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-display text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-sm">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-4 h-4 text-primary" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">{link.label}</p>
                    <p className="text-sm text-foreground font-medium">{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            {[
              { name: "name", type: "text", label: "Name" },
              { name: "email", type: "email", label: "Email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-display text-xs font-semibold tracking-wider uppercase ${
                  focused === field.name || formData[field.name as keyof typeof formData]
                    ? "top-2 text-primary text-[10px]"
                    : "top-4 text-muted-foreground"
                }`}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={formData[field.name as keyof typeof formData]}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-secondary/50 transition-all duration-300"
                />
              </div>
            ))}
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-display text-xs font-semibold tracking-wider uppercase ${
                focused === "message" || formData.message
                  ? "top-2 text-primary text-[10px]"
                  : "top-4 text-muted-foreground"
              }`}>
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/30 border border-border/50 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm focus:outline-none focus:border-primary/50 focus:bg-secondary/50 transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group w-full h-12 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:bg-primary/80 transition-all glow glow-hover disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="separator-line mt-24 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Shubham Uday Gotad. Crafted with passion.
          </p>
          <div className="flex items-center gap-4">
            {contactLinks.filter(l => l.external || l.label === "Email").map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
