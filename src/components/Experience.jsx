import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    company: "LINE Invoice",
    role: "Software Engineer",
    period: "Jan 2023 - Sep 2024",
    description: `• Developed personalized real-time notifications and integrated invoice categorization model, supporting the product's growth from 300K to over 1M+ users within one year. \n• Redesigned a data synchronization pipeline for 3 million records in 48 hours, achieving zero data loss and restoring stability. \n• Optimized the invoice lottery matching algorithm and refined database indexing, reducing processing time for 12M+ invoices from hours to under 30 minutes.\n• Built Grafana dashboards to monitor 10+ Temporal workflows and millions of tasks, improving system reliability and issue traceability.`,
    technologies: [
      "TypeScript",
      "Node.js",
      "Go",
      "Parse Server",
      " Temporal.io",
      "Grafana",
      "SQL",
      "Kafka",
    ],
  },
  {
    company: "LINE Official Account Plus",
    role: "Software Engineer",
    period: "Mar 2024 - Jun 2024",
    description:
      "• Built Airflow pipelines orchestrating Jupyter notebooks and Spark jobs for automated creating user-tag.\n• Developed React components with TypeScript to support user-tag management features.\n• Migrated 12 microservices to a Kubernetes cluster with zero downtime.",
    technologies: ["React", "Airflow", "Docker", "K8s", "API"],
  },
  {
    company: "LINE Travel",
    role: "Software Engineer",
    period: "Sep 2021 - Dec 2022 (With 1-year Internship)",
    description:
      "• Built a React-based content management UI for editors to manage travel promotional campaigns.\n• Designed a high-performance async API aggregation service integrating five airline APIs for flight search.",
    technologies: [
      "JavaScript",
      "React",
      "Unit/Integration Testing",
      "GraphQL",
    ],
  },
];

function ExperienceCard({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

      <div className="glass rounded-xl p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-foreground">{experience.role}</h3>
            <h4 className="text-muted-foreground">{experience.company}</h4>
          </div>
          <span className="text-sm text-muted-foreground">
            {experience.period}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 whitespace-pre-wrap">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-muted/50 text-sm text-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="px-6 py-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 title title-bg-color">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of building impactful products and leading technical
            initiatives
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
