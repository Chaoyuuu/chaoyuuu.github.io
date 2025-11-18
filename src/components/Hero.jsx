import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-gray-900 mb-6 name title-bg-color">
            Chao-Yu Lee
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Engineer and creator dedicated to building thoughtful, intelligent systems that turn complexity into clarity — crafting seamless experiences that solve real problems, empower users, and push the boundaries of what technology can inspire.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:cursor-pointer transition-colors group"
        >
          <span className="font-bold">Explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}
