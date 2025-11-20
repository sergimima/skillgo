
import { Card } from "@/components/ui/card";
import { UserX, BatteryLow, Users, BarChart } from "lucide-react";
import { useTranslation } from "react-i18next";

const Problems = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: UserX,
      title: t('problems.list.turnover.title'),
      description: t('problems.list.turnover.description'),
    },
    {
      icon: BatteryLow,
      title: t('problems.list.demotivation.title'),
      description: t('problems.list.demotivation.description'),
    },
    {
      icon: Users,
      title: t('problems.list.unevenTraining.title'),
      description: t('problems.list.unevenTraining.description'),
    },
    {
      icon: BarChart,
      title: t('problems.list.lackOfData.title'),
      description: t('problems.list.lackOfData.description'),
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('problems.title')} <span className="text-gradient">{t('problems.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('problems.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-block bg-gradient-primary text-primary-foreground rounded-2xl p-8">
            <p className="text-2xl font-bold mb-2">
              {t('problems.cta.title')}
            </p>
            <p className="text-lg opacity-90">
              {t('problems.cta.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;