import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Tanvir Hossain Khan. All rights reserved.
          </motion.p>
          
          <motion.p
            className="text-muted-foreground text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> using React & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
