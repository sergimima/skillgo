
import { Check, X, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Comparison = () => {
  const { t } = useTranslation();

  const features = [
    {
      feature: t('comparison.table.features.implementation'),
      presencial: "low",
      online: "medium",
      duoleader: "high",
    },
    {
      feature: t('comparison.table.features.engagement'),
      presencial: "medium",
      online: "low",
      duoleader: "high",
    },
    {
      feature: t('comparison.table.features.cost'),
      presencial: "high",
      online: "medium",
      duoleader: "low",
    },
    {
      feature: t('comparison.table.features.tracking'),
      presencial: "low",
      online: "medium",
      duoleader: "high",
    },
    {
      feature: t('comparison.table.features.flexibility'),
      presencial: "low",
      online: "high",
      duoleader: "high",
    },
    {
      feature: t('comparison.table.features.motivation'),
      presencial: "medium",
      online: "low",
      duoleader: "high",
    },
  ];

  const getIcon = (level: string) => {
    if (level === "high") return <Check className="w-5 h-5 text-primary" />;
    if (level === "medium") return <Minus className="w-5 h-5 text-muted-foreground" />;
    return <X className="w-5 h-5 text-destructive" />;
  };

  const getLevelText = (level: string) => {
    if (level === "high") return t('comparison.table.levels.high');
    if (level === "medium") return t('comparison.table.levels.medium');
    return t('comparison.table.levels.low');
  };

  return (
    <section id="comparativa" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('comparison.title')} <span className="text-gradient">{t('comparison.titleHighlight')}</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <Card className="overflow-hidden animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">{t('comparison.table.feature')}</th>
                  <th className="text-center p-4 font-semibold">{t('comparison.table.inPerson')}</th>
                  <th className="text-center p-4 font-semibold">{t('comparison.table.onlineTraditional')}</th>
                  <th className="text-center p-4 font-semibold bg-gradient-primary text-primary-foreground">
                    {t('comparison.table.skillgo')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-medium">{item.feature}</td>
                    <td className="p-4">
                      <div className="flex flex-col items-center gap-1">
                        {getIcon(item.presencial)}
                        <span className="text-xs text-muted-foreground">
                          {getLevelText(item.presencial)}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col items-center gap-1">
                        {getIcon(item.online)}
                        <span className="text-xs text-muted-foreground">
                          {getLevelText(item.online)}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 bg-primary-light/20">
                      <div className="flex flex-col items-center gap-1">
                        {getIcon(item.duoleader)}
                        <span className="text-xs font-medium text-primary">
                          {getLevelText(item.duoleader)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Comparison;
