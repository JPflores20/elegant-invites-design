import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setIsVisible(true);
          return;
        }
        
        if (window.scrollY > lastScrollY) { 
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else { 
          setIsVisible(true);  
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 border-b border-primary/10 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-background/80 backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO ACTUALIZADO: Invito */}
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground tracking-tight">
            Invito<span className="text-primary">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="gold-gradient text-primary-foreground rounded-full px-6">
            Empezar
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full px-4 py-4 shadow-lg animate-fade-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2 block border-b border-border/50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full gold-gradient text-primary-foreground rounded-full mt-2">
              Empezar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;