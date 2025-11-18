import { motion } from "motion/react";
import { useInView } from "./useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LINE Invoice",
    description:
      "LINE Invoice is a feature in Taiwan’s LINE app that lets users store and manage electronic invoices through their mobile barcode, automatically checking for winning receipts and sending notifications. It also provides spending summaries, invoice details, and prize-claim.",
    image:
      "https://d2lfcsub12kx0l.cloudfront.net/tw/article/img/202408/2024082910332911820_ExtraLargeSize-820x615.jpg",
    category: "12M+ Invoices / 1M+ Users",
    link: "https://lps-editor-832.landpress.line.me/lineinvoice-newusertutorial",
  },
  {
    title: "LINE Official Account",
    description:
      "LINE Official Account is a platform that allows businesses, creators, and organizations to communicate with users on LINE through a dedicated, verified account. It provides tools for broadcasting messages, creating chatbots, managing customer interactions, and running promotions. It's commonly used for customer service, marketing, and building direct engagement with audiences.",
    image: "https://www.pcschool.com.tw/updimg/act/Blog/content/B00063/G-3.jpg",
    category: "3.1M+ Branding",
    link: "https://tw.linebiz.com/manual/line-official-account/oa-function-intro/",
  },
  {
    title: "LINE Travel",
    description:
      "LINE Travel is LINE’s all-in-one travel booking platform that lets users search and book flights, hotels, tours, and activities, and also create shared itineraries with friends directly inside the LINE app.",
    image:
      "https://d2lfcsub12kx0l.cloudfront.net/tw/article/img/202408/2024080910460997070_ExtraLargeSize-820x615.jpg",
    category: "Most convenient, fast, and trusted platform.",
    link: "https://travel.line.me/",
  },
];

export function Work() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="work"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-gray-900 mb-4 title title-bg-color">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl">
            A selection of recent projects showcasing my approach to design and
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="group">
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6 relative cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500">{project.category}</p>
                  <h3 className="text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
