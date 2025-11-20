
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img 
              src={logo} 
              alt="Skill & Go" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.howItWorks')}
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.benefits')}
            </button>
            <button
              onClick={() => scrollToSection("comparativa")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.comparison')}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              {t('nav.requestDemo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.howItWorks')}
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.benefits')}
            </button>
            <button
              onClick={() => scrollToSection("comparativa")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.comparison')}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("contacto")}
              className="w-full bg-gradient-primary"
            >
              {t('nav.requestDemo')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
