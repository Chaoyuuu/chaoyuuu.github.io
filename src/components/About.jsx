import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
  const { ref, isInView } = useInView();
  const scrollToWork = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-gray-50"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 gradient-subtle -z-10" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="border-gray-400 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/50"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="about-title">Chao-Yu (Yuna)</h1>

            <p className="text-muted-foreground max-w-lg">
              I'm a full-stack engineer with expertise in system architecture
              and backend development for high-availability, real-time AI
              applications. I build reliable, scalable services, designing
              robust data flows, creating efficient APIs, and integrating
              intelligent models. From retrieval-based Q&A to VLMs,
              Transformers, and predictive modeling, I enjoy leveraging data and
              AI to build seamless, end-to-end products.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button onClick={scrollToWork} size="lg" variant="ghost" className="group text-gray-600 hover:text-gray-900 hover:cursor-pointer">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border-gray-400 hover:cursor-pointer hover:bg-gray-100" size="lg" variant="outline" onClick={() => window.open('https://www.linkedin.com/in/chaoyulee/', '_blank')}>
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/Chaoyuuu" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/chaoyulee/" },
                { icon: Mail, href: "mailto:chaoyuuuz@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-2 rounded-lg border border-gray-200 hover:border-border hover:bg-muted/50  hover:bg-gray-200 transition-all"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass">
              <img
                src="./assets/image/portfolio.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
