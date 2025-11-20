
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Sparkles, BookOpen, Gift, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Sparkles,
      titleKey: "howItWorks.steps.motivation.title",
      descriptionKey: "howItWorks.steps.motivation.description",
    },
    {
      icon: BookOpen,
      titleKey: "howItWorks.steps.learning.title",
      descriptionKey: "howItWorks.steps.learning.description",
    },
    {
      icon: Gift,
      titleKey: "howItWorks.steps.rewards.title",
      descriptionKey: "howItWorks.steps.rewards.description",
    },
    {
      icon: TrendingUp,
      titleKey: "howItWorks.steps.growth.title",
      descriptionKey: "howItWorks.steps.growth.description",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('howItWorks.title')} <span className="text-gradient">{t('howItWorks.titleHighlight')}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground">{t(step.descriptionKey)}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
