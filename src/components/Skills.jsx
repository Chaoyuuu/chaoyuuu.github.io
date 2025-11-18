import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Layout, Server, Sparkles, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "Java", "SQL", "REST APIs"],
  },
  {
    icon: Database,
    title: "Infrastructure",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins", "Github Action", "Argo CD"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "Python", "Go", "JavaScript", "SQL"],
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    skills: ["PyTorch", "Scikit-learn", "Transformer", "VLM", "CNNs", "clustering"],
  },
  {
    icon: Zap,
    title: "Data/Messaging",
    skills: ["SQL", "MongoDB", "Airflow", "Kafka", "Redis", "Temporal.io", "MySQL"],
  },
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-xl p-6 hover:shadow-lg transition-all group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
          <category.icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-foreground">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
            className="px-3 py-1 rounded-full bg-muted/50 text-sm text-foreground border border-border/50 hover:border-border hover:bg-muted transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="px-6 py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 title title-bg-color">
            Skills & Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built over years of solving complex technical
            challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
