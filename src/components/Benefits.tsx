
import { Card } from "@/components/ui/card";
import { Users, Building2, Heart, Rocket, BarChart3, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const sellerBenefits = [
    {
      icon: Heart,
      title: t('benefits.sellers.funLearning.title'),
      description: t('benefits.sellers.funLearning.description'),
    },
    {
      icon: Rocket,
      title: t('benefits.sellers.visibleProgress.title'),
      description: t('benefits.sellers.visibleProgress.description'),
    },
    {
      icon: Users,
      title: t('benefits.sellers.realRewards.title'),
      description: t('benefits.sellers.realRewards.description'),
    },
  ];

  const companyBenefits = [
    {
      icon: Building2,
      title: t('benefits.companies.customTraining.title'),
      description: t('benefits.companies.customTraining.description'),
    },
    {
      icon: BarChart3,
      title: t('benefits.companies.realTimeData.title'),
      description: t('benefits.companies.realTimeData.description'),
    },
    {
      icon: Shield,
      title: t('benefits.companies.moreLoyalty.title'),
      description: t('benefits.companies.moreLoyalty.description'),
    },
  ];

  return (
    <section id="beneficios" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('benefits.title')} <span className="text-gradient">{t('benefits.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sellers Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">{t('benefits.forSellers')}</h3>
            </div>
            {sellerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Company Benefits */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">{t('benefits.forCompanies')}</h3>
            </div>
            {companyBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
