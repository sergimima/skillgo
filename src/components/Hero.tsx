
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}{" "}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg group"
              >
                {t('hero.requestDemoBtn')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("como-funciona");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-lg border-2"
              >
                {t('hero.discoverBtn')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient">{t('hero.stats.sellers')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.sellersLabel')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">{t('hero.stats.engagement')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.engagementLabel')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">{t('hero.stats.improvement')}</div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.improvementLabel')}</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroIllustration}
              alt="Skill & Go Gamified Learning Platform"
              className="relative w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
