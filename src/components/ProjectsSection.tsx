import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import toyTopiaImage from "@/assets/ToyTopia.png";
import homeNestImage from "@/assets/HomeNest.png";
import eTuitionBDImage from "@/assets/eTuitionBD.png";

const projects = [
  {
    title: "eTuitionBD - Tuition Management Platform",
    description:
      "A full-featured tuition management platform that connects students, tutors, and administrators through structured workflows for tuition posting, tutor applications, communication, and payments.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe"],
    github: "https://github.com/sakinkhan/eTuitionBD-b12a11-client.git",
    live: "https://etuitionbd-sakinkhan.web.app/",
    color: "from-primary/20 to-accent/10",
    image: eTuitionBDImage,
  },
  {
    title: "HomeNest - Real Estate Platform",
    description:
      "HomeNest is a real estate listing platform that enables property owners to publish rental or sale listings, while allowing users to browse, search, and filter properties by location, price range, and property type.",
    tags: ["React", "Express.js", "MongoDB", "Firebase", "Node.js"],
    github: "https://github.com/sakinkhan/homenest-b12a10-client.git",
    live: "https://home-nest-app-485ea.web.app/",
    color: "from-accent/20 to-primary/10",
    image: homeNestImage,
  },
  {
    title: "ToyTopia - Online Marketplace for Local Toy Stores",
    description:
      "ToyTopia is an online marketplace designed to promote local toy stores by allowing families to browse, explore, and purchase children’s toys through a user-friendly, engaging interface.",
    tags: ["React", "Tailwind CSS", "DaisyUI", "Firebase"],
    github: "https://github.com/sakinkhan/toytopia-b12a9.git",
    live: "https://toytopia-b12a09.web.app/",
    color: "from-primary/15 to-accent/15",
    image: toyTopiaImage,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-3">My Work</p>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image Placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                {/* Actual image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder className="w-16 h-16 text-foreground/20" />
                  </div>
                )}

                {/* Hover Overlay */}
                <motion.div className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink size={16} />
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
