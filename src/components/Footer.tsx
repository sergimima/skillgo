
import { Trophy, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Skill & Go</span>
            </div>
            <p className="text-sm opacity-80">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product.title')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#como-funciona" className="hover:opacity-100 transition-opacity">
                  {t('footer.product.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:opacity-100 transition-opacity">
                  {t('footer.product.benefits')}
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:opacity-100 transition-opacity">
                  {t('footer.product.comparison')}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:opacity-100 transition-opacity">
                  {t('footer.product.requestDemo')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t('footer.company.about')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t('footer.company.blog')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t('footer.company.successStories')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  {t('footer.company.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-2 text-sm opacity-80 mb-4">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@skill-go.com" className="hover:opacity-100 transition-opacity">
                  {t('footer.contact.email')}
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>© {currentYear} {t('footer.legal.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              {t('footer.legal.privacy')}
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              {t('footer.legal.terms')}
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              {t('footer.legal.legalNotice')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
