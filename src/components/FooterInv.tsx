import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-primary/50" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <Heart className="h-6 w-6 text-secondary fill-secondary/30" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
            <Sparkles className="h-5 w-5 text-primary/50" />
          </div>

          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            ¡Te esperamos!
          </h3>
          
          <p className="font-elegant text-lg text-muted-foreground mb-8">
            Con amor,<br />
            <span className="gold-text font-display text-xl">Isabella & Alejandro</span>
          </p>

          <div className="pt-8 border-t border-border/30">
            <p className="font-body text-xs text-muted-foreground/60">
              #NuestraBoda • 15 de Marzo, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;