import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Swal from "sweetalert2";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/sakinkhan", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tanvir-hossain-khan/",
    label: "LinkedIn",
  },
];

const FORM_ENDPOINT = "https://formspree.io/f/mreeblyz";

const ContactSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        form.reset();

        Swal.fire({
          title: "Thanks, your message has been sent",
          icon: "success",
          draggable: true,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
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
              I'm currently open to opportunities and interesting projects.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-10">
              {/* LEFT */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={18} />
                      </div>
                      <span>tanvirhossainkhan56@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="text-primary" size={18} />
                      </div>
                      <span>+61 470 365 288</span>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="text-primary" size={18} />
                      </div>
                      <span>Canberra, Australia</span>
                    </div>
                  </div>

                  <div className="mb-10">
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
                        >
                          <Icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.a
                  href="/Tanvir Hossain Khan CV 2026.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground glow-effect"
                >
                  Download Resume
                  <Download size={18} />
                </motion.a>
              </div>

              {/* separator */}
              <div className="hidden md:flex justify-center">
                <div className="w-px bg-border/50" />
              </div>

              {/* RIGHT FORM */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-full bg-secondary border border-border/50"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-full bg-secondary border border-border/50"
                    />

                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 resize-none"
                    />

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 glow-effect"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                      <Send size={18} />
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
