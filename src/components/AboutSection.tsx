import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating intuitive interfaces with attention to every pixel.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Shipping quality products efficiently without compromises.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-mono text-sm mb-3">About Me</p>
            <h2 className="section-heading">
              Passionate about building{" "}
              <span className="gradient-text">digital experiences</span>
            </h2>
            <p className="section-subheading mb-6">
              I'm a full-stack developer based in Bangladesh with a passion for creating 
              beautiful, functional, and user-centered digital experiences. With over 5 years 
              of experience in the field, I am always looking for new and innovative ways 
              to bring my clients' visions to life.
            </p>
            <p className="text-muted-foreground mb-8">
              I specialize in React, Node.js, and modern web technologies. When I'm not 
              coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
