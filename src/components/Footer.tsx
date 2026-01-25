import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-foreground text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo / Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold">
              Eventos <span className="text-primary">Inolvidables</span>
            </h3>
            <p className="text-background/60 text-sm max-w-md">
              Creando invitaciones digitales que hacen de cada momento algo extraordinario.
            </p>
          </div>

          {/* Contact CTA */}
          <Button
            asChild
            size="lg"
            className="gold-gradient text-primary-foreground hover:opacity-90 rounded-full px-8 py-6 text-lg font-medium shadow-lg"
          >
            <a
              href="https://wa.me/5215512345678?text=Hola%2C%20quiero%20información%20sobre%20invitaciones%20digitales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contáctanos
            </a>
          </Button>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Copyright */}
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Eventos Inolvidables. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
