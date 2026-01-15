import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  frontend: [
    "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "DaisyUI", "Framer Motion", "Vue.js"
  ],
  backend: [
    "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"
  ],
  tools: [
    "Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"
  ],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-3">My Skills</p>
          <h2 className="section-heading">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-subheading mx-auto">
            I'm constantly learning and adapting to new technologies to deliver the best solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Frontend</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.frontend.map((skill) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Backend</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.backend.map((skill) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">Tools & DevOps</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.tools.map((skill) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
