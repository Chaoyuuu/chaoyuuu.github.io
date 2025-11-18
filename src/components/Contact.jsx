import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Mail, Github, Linkedin, File } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:chaoyuuuz@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Chaoyuuu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chaoyulee/" },
  { icon: File, label: "Resume", href: "./assets/file/ChaoYu_Resume.pdf" },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 sm:px-8 lg:px-12 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-gray-900 mb-6 title title-bg-color">Let's work together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out if you'd like to collaborate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              download="ChaoYu_Resume.pdf"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-gray-300 transition-colors group"
            >
              <social.icon className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-12 border-t border-gray-200"
        >
          <p className="text-gray-500">
            © 2025 Portfolio. Designed with care and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
