import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-mono text-sm mb-3">Get In Touch</p>
            <h2 className="section-heading">
              Let's work <span className="gradient-text">together</span>
            </h2>
            <p className="section-subheading mx-auto">
              I'm currently open to freelance opportunities and interesting projects. 
              Feel free to reach out if you have a question or just want to say hi!
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={18} />
                    </div>
                    <span>tanvir@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Message Form */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 glow-effect"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
