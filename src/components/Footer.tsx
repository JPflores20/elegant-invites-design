import { Instagram, Facebook, MessageCircle, Sparkles } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Diseños", href: "#designs" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Precios", href: "#precios" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 px-4 bg-foreground text-background relative overflow-hidden">
      {/* Decorative element background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* LOGO ACTUALIZADO: StellarDay */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="bg-primary/20 p-2 rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif tracking-tight">
              StellarDay<span className="text-primary">.</span>
            </h3>
            <p className="text-background/60 text-sm max-w-md mx-auto">
              La plataforma premium para crear invitaciones digitales inolvidables.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-background/80 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Social links & Copyright */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* COPYRIGHT ACTUALIZADO */}
            <p className="text-background/40 text-xs">
              © {new Date().getFullYear()} StellarDay. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;