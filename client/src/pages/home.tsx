import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  ScanLine,
  FileText,
  BarChart3,
  Search,
  Shield,
  Cloud,
  Share2,
  Store,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Lock,
  Eye,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Languages,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import logoImage from "@assets/new_logo_1764438435897.jpg";
import appScreen1 from "@assets/230x498bb_1764438483799.webp";
import appScreen2 from "@assets/230x498bb (1)_1764438483799.webp";
import appScreen3 from "@assets/230x498bb (2)_1764438483800.webp";
import appScreen4 from "@assets/230x498bb (3)_1764438483800.webp";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: <T extends React.ReactNode>(ar: T, en: T) => T;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  t: <T extends React.ReactNode>(ar: T, _en: T): T => ar,
  isRTL: true,
});

function useLanguage() {
  return useContext(LanguageContext);
}

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = <T extends React.ReactNode>(ar: T, en: T): T => (lang === "ar" ? ar : en);
  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-muted rounded-full p-1">
      <button
        onClick={() => setLang("ar")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          lang === "ar"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        data-testid="button-lang-ar"
      >
        AR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        data-testid="button-lang-en"
      >
        EN
      </button>
    </div>
  );
}

function Header() {
  const { t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="وسم Wasem" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-features"
            >
              {t("المميزات", "Features")}
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-how-it-works"
            >
              {t("كيف يعمل", "How It Works")}
            </a>
            <a
              href="#use-cases"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-use-cases"
            >
              {t("من يستخدم وسم", "Use Cases")}
            </a>
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              {t("الخصوصية", "Privacy")}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <Button data-testid="button-download-header">
              <Smartphone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("حمل التطبيق", "Download App")}
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              <nav className="flex flex-col gap-4">
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("المميزات", "Features")}
                </a>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("كيف يعمل", "How It Works")}
                </a>
                <a
                  href="#use-cases"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("من يستخدم وسم", "Use Cases")}
                </a>
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("الخصوصية", "Privacy")}
                </a>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <LanguageToggle />
                  <Button
                    size="sm"
                    data-testid="button-download-mobile"
                  >
                    <Smartphone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                    {t("حمل التطبيق", "Download")}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function HeroSection() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}
          >
            <Badge variant="secondary" className="mb-6">
              <Star className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
              {t("تطبيق ذكي لإدارة الفواتير", "Smart Invoice Management App")}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t(
                <>
                  وسم – احفظ فواتيرك وراقب{" "}
                  <span className="text-primary">سلوك العملاء</span> بسهولة
                </>,
                <>
                  Wasem – Save invoices & track{" "}
                  <span className="text-primary">customer behavior</span> easily
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {t(
                "وداعًا للفواتير المبعثرة! مع وسم، احفظ فواتيرك بسرعة عبر QR واحصل على تحليلات ذكية لسلوك العملاء.",
                "Say goodbye to scattered invoices! With Wasem, save your invoices quickly via QR and get smart analytics on customer behavior."
              )}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "lg:justify-start" : "lg:justify-start"}`}>
              <Button size="lg" className="text-lg px-8" data-testid="button-try-app">
                {t("جرب التطبيق الآن", "Try the App Now")}
                <ArrowIcon className={`w-5 h-5 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-download-free">
                <Smartphone className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("حمل التطبيق مجانًا", "Download Free")}
              </Button>
            </div>

            <div className={`mt-10 flex items-center gap-6 justify-center ${isRTL ? "lg:justify-start" : "lg:justify-start"} text-muted-foreground`}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{t("مجاني", "Free")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>{t("آمن", "Secure")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{t("سريع", "Fast")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative flex justify-center ${isRTL ? "lg:justify-start" : "lg:justify-end"}`}
          >
            <div className="relative">
              <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[560px] md:h-[600px] bg-gradient-to-b from-card to-card/80 rounded-[3rem] border-4 border-muted p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-muted rounded-b-2xl" />
                  
                  <div className="pt-12 px-4">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                        <QrCode className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground">
                        {t("امسح الفاتورة", "Scan Invoice")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("وجه الكاميرا نحو QR", "Point camera at QR")}
                      </p>
                    </div>

                    <div className="relative w-full aspect-square bg-muted/50 rounded-2xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-xl" />
                      <motion.div
                        className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                        animate={{ y: [-80, 80] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "linear",
                        }}
                      />
                      <div className="w-24 h-24 bg-foreground/10 rounded-lg grid grid-cols-3 grid-rows-3 gap-1 p-2">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-sm ${
                              [0, 2, 6, 8, 4].includes(i)
                                ? "bg-foreground/80"
                                : "bg-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="bg-card rounded-xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                          <p className="font-semibold text-sm">
                            {t("فاتورة #1234", "Invoice #1234")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t("150.00 ر.س", "150.00 SAR")}
                          </p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="bg-card rounded-xl p-3 flex items-center gap-3 opacity-60">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                          <p className="font-semibold text-sm">
                            {t("فاتورة #1233", "Invoice #1233")}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {t("85.50 ر.س", "85.50 SAR")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className={`absolute -top-4 ${isRTL ? "-right-4" : "-left-4"} bg-card rounded-2xl p-4 shadow-lg border border-border`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {t("تحليلات ذكية", "Smart Analytics")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -bottom-4 ${isRTL ? "-left-4" : "-right-4"} bg-card rounded-2xl p-4 shadow-lg border border-border`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {t("تخزين آمن", "Secure Storage")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AppShowcaseSection() {
  const { t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const screens = [
    {
      image: appScreen1,
      title: t("الفواتير", "Invoices"),
      description: t(
        "تصفح وإدارة جميع فواتيرك في مكان واحد",
        "Browse and manage all your invoices in one place"
      ),
    },
    {
      image: appScreen2,
      title: t("تحليل الصرف", "Spending Analysis"),
      description: t(
        "تتبع معدل صرفك الشهري بسهولة",
        "Track your monthly spending rate easily"
      ),
    },
    {
      image: appScreen3,
      title: t("المصاريف", "Expenses"),
      description: t(
        "راقب مصاريفك ومتوسط الصرف",
        "Monitor your expenses and average spending"
      ),
    },
    {
      image: appScreen4,
      title: t("الملف الشخصي", "Profile"),
      description: t(
        "إدارة حسابك وإعداداتك",
        "Manage your account and settings"
      ),
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section id="app-preview" className="py-20 md:py-28 bg-gradient-to-b from-background to-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Smartphone className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("واجهة التطبيق", "App Interface")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("تجربة استخدام سهلة", "Easy User Experience")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "واجهة عربية بسيطة وسهلة الاستخدام لإدارة فواتيرك",
              "A simple and easy-to-use Arabic interface for managing your invoices"
            )}
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-card border border-border hover-elevate transition-all z-10"
              data-testid="button-prev-slide"
            >
              {isRTL ? (
                <ChevronRight className="w-6 h-6 text-foreground" />
              ) : (
                <ChevronLeft className="w-6 h-6 text-foreground" />
              )}
            </button>

            <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
              {screens.map((screen, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + screens.length) % screens.length;
                const isNext = index === (activeIndex + 1) % screens.length;
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={index}
                    className={`relative transition-all duration-300 ${
                      isActive
                        ? "z-20 scale-100"
                        : "z-10 scale-75 opacity-50 hidden md:block"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.75,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className={`${isActive ? "w-56 sm:w-64 md:w-72" : "w-48 md:w-56"} transition-all duration-300`}>
                        <div className="bg-gradient-to-b from-muted to-muted/50 rounded-[2.5rem] p-2 shadow-2xl border-4 border-muted">
                          <div className="rounded-[2rem] overflow-hidden bg-background">
                            <img
                              src={screen.image}
                              alt={screen.title}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-card border border-border hover-elevate transition-all z-10"
              data-testid="button-next-slide"
            >
              {isRTL ? (
                <ChevronLeft className="w-6 h-6 text-foreground" />
              ) : (
                <ChevronRight className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {screens[activeIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {screens[activeIndex].description}
            </p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-6">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/30"
                }`}
                data-testid={`button-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      number: isRTL ? "١" : "1",
      icon: Smartphone,
      title: t("افتح التطبيق", "Open the App"),
      description: t(
        "افتح التطبيق واضغط على زر المسح.",
        "Open the app and tap the scan button."
      ),
    },
    {
      number: isRTL ? "٢" : "2",
      icon: ScanLine,
      title: t("امسح QR", "Scan QR"),
      description: t(
        "صوّر أو اقرأ QR الموجود على الفاتورة.",
        "Capture or read the QR code on the invoice."
      ),
    },
    {
      number: isRTL ? "٣" : "3",
      icon: FileText,
      title: t("حفظ تلقائي", "Auto Save"),
      description: t(
        "يتم استخراج التفاصيل وحفظها تلقائيًا.",
        "Details are extracted and saved automatically."
      ),
    },
    {
      number: isRTL ? "٤" : "4",
      icon: Share2,
      title: t("تصفح وشارك", "Browse & Share"),
      description: t(
        "تصفّح التقارير، صدّرها، أو شاركها مع فريقك.",
        "Browse reports, export, or share with your team."
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Clock className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("سهل وسريع", "Easy & Fast")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("خطوات بسيطة", "Simple Steps")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "ابدأ باستخدام وسم في أربع خطوات سهلة",
              "Get started with Wasem in four easy steps"
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative p-6 h-full hover-elevate text-center group">
                <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <span className="text-primary font-bold">{step.number}</span>
                </div>

                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute ${isRTL ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} top-1/2 -translate-y-1/2`}>
                    <ChevronDown className={`w-6 h-6 text-muted-foreground/30 ${isRTL ? "rotate-90" : "-rotate-90"}`} />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: QrCode,
      title: t("مسح QR فوري", "Instant QR Scan"),
      description: t(
        "لا حاجة لإدخال البيانات يدويًا. فقط امسح وسيتم الباقي.",
        "No manual data entry needed. Just scan and the rest is done."
      ),
    },
    {
      icon: FileText,
      title: t("تنظيم ذكي للفواتير", "Smart Invoice Organization"),
      description: t(
        "فلترة بالتصنيف، التاريخ، البائع، السعر، والكلمات المفتاحية.",
        "Filter by category, date, vendor, price, and keywords."
      ),
    },
    {
      icon: BarChart3,
      title: t("تحليلات ذكية", "Smart Analytics"),
      description: t(
        "تعرف على تكرار الزيارات، متوسط قيمة الفاتورة، أوقات الذروة، وأكثر.",
        "Learn about visit frequency, average invoice value, peak times, and more."
      ),
    },
    {
      icon: Search,
      title: t("بحث سريع", "Quick Search"),
      description: t(
        "اعثر على أي فاتورة خلال ثوانٍ باستخدام البحث المتقدم.",
        "Find any invoice within seconds using advanced search."
      ),
    },
    {
      icon: Shield,
      title: t("أمان وخصوصية", "Security & Privacy"),
      description: t(
        "تخزين مشفر، وجمع بيانات سلوك المستخدم مجهول الهوية أو حسب اختيارك.",
        "Encrypted storage, and anonymous user behavior data collection or as you choose."
      ),
    },
    {
      icon: Cloud,
      title: t("نسخ احتياطي ومزامنة", "Backup & Sync"),
      description: t(
        "حفظ البيانات على السحابة أو محليًا، حسب تفضيلك.",
        "Save data to the cloud or locally, as you prefer."
      ),
    },
    {
      icon: Share2,
      title: t("تصدير ومشاركة", "Export & Share"),
      description: t(
        "CSV, PDF، أو إرسال الفواتير عبر البريد أو التطبيقات الأخرى.",
        "CSV, PDF, or send invoices via email or other apps."
      ),
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("مميزات قوية", "Powerful Features")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("المميزات", "Features")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "كل ما تحتاجه لإدارة فواتيرك وفهم سلوك عملائك",
              "Everything you need to manage invoices and understand customer behavior"
            )}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full hover-elevate group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const { t, isRTL } = useLanguage();

  const useCases = [
    {
      icon: Store,
      title: t("أصحاب المحلات", "Shop Owners"),
      description: t(
        "تتبع المبيعات ومعرفة المنتجات الأكثر مبيعًا.",
        "Track sales and identify best-selling products."
      ),
      quote: t(
        "وسم ساعدني في فهم أي المنتجات تبيع أكثر.",
        "Wasem helped me understand which products sell more."
      ),
    },
    {
      icon: Briefcase,
      title: t("رجال الأعمال والمحاسبون", "Business & Accountants"),
      description: t(
        "تنظيم الفواتير لتسهيل إعداد التقارير.",
        "Organize invoices to simplify reporting."
      ),
      quote: t(
        "أصبح إعداد التقارير الشهرية أسرع بكثير.",
        "Monthly reporting has become much faster."
      ),
    },
    {
      icon: TrendingUp,
      title: t("فرق التسويق", "Marketing Teams"),
      description: t(
        "فهم سلوك العملاء لتحسين الحملات والعروض.",
        "Understand customer behavior to improve campaigns."
      ),
      quote: t(
        "نستخدم البيانات لاستهداف العملاء بشكل أفضل.",
        "We use data to better target customers."
      ),
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Briefcase className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("حالات الاستخدام", "Use Cases")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("من يستخدم وسم؟", "Who Uses Wasem?")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "وسم مصمم لمختلف احتياجات الأعمال",
              "Wasem is designed for various business needs"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover-elevate text-center">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {useCase.description}
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm italic text-muted-foreground">
                    "{useCase.quote}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  const { t, isRTL } = useLanguage();

  const privacyFeatures = [
    {
      icon: Lock,
      title: t("تخزين مشفر", "Encrypted Storage"),
      description: t(
        "جميع بياناتك محمية بأحدث تقنيات التشفير.",
        "All your data is protected with the latest encryption technology."
      ),
    },
    {
      icon: Eye,
      title: t("بيانات مجهولة الهوية", "Anonymous Data"),
      description: t(
        "جمع بيانات التحليلات بشكل مجهول لحماية خصوصيتك.",
        "Analytics data is collected anonymously to protect your privacy."
      ),
    },
    {
      icon: Trash2,
      title: t("تحكم كامل", "Full Control"),
      description: t(
        "إمكانية تعطيل التحليلات أو حذف بياناتك في أي وقت.",
        "Ability to disable analytics or delete your data at any time."
      ),
    },
  ];

  return (
    <section id="privacy" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`order-2 ${isRTL ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-24 h-24 text-primary" />
                </div>
              </div>
              <motion.div
                className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} bg-card rounded-xl p-3 shadow-lg border border-border`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Lock className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                className={`absolute bottom-0 ${isRTL ? "left-0" : "right-0"} bg-card rounded-xl p-3 shadow-lg border border-border`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`order-1 ${isRTL ? "lg:order-2" : "lg:order-1"}`}
          >
            <Badge variant="secondary" className="mb-4">
              <Shield className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
              {t("خصوصية مضمونة", "Guaranteed Privacy")}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("الخصوصية والأمان", "Privacy & Security")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t(
                "نضمن حماية بياناتك: تخزين مشفر، وجمع بيانات مجهولة الهوية، مع إمكانية تعطيل التحليلات أو حذف بياناتك في أي وقت.",
                "We guarantee your data protection: encrypted storage, anonymous data collection, with the ability to disable analytics or delete your data at any time."
              )}
            </p>

            <div className="space-y-4">
              {privacyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const { t, isRTL } = useLanguage();

  const benefits = [
    { label: t("سهولة الاستخدام", "Easy to Use"), icon: Smartphone },
    { label: t("قوة التحليل", "Powerful Analytics"), icon: BarChart3 },
    { label: t("توفير الوقت", "Time Saving"), icon: Clock },
  ];

  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Star className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("لماذا نحن", "Why Us")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("لماذا وسم؟", "Why Wasem?")}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t(
              "لأنه يجمع بين سهولة الاستخدام وقوة التحليل. يوفر وقتك، يحسّن أداء عملك، ويزيد أرباحك.",
              "Because it combines ease of use with powerful analytics. It saves your time, improves your business performance, and increases your profits."
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-base gap-2"
                >
                  <benefit.icon className="w-4 h-4" />
                  {benefit.label}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +50K
              </div>
              <p className="text-muted-foreground">
                {t("فاتورة محفوظة", "Saved Invoices")}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                98%
              </div>
              <p className="text-muted-foreground">
                {t("رضا العملاء", "Customer Satisfaction")}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                5s
              </div>
              <p className="text-muted-foreground">
                {t("وقت المسح", "Scan Time")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      quote: t(
        "وسم غيّر طريقة إدارة فواتيري، أصبح كل شيء منظم وسهل!",
        "Wasem changed the way I manage my invoices, everything is organized and easy!"
      ),
      author: t("أحمد المحمد", "Ahmed Al-Mohammed"),
      role: t("تاجر محلي", "Local Merchant"),
      rating: 5,
    },
    {
      quote: t(
        "أفضل أداة لفهم سلوك عملائي وتحسين المبيعات.",
        "The best tool for understanding customer behavior and improving sales."
      ),
      author: t("فريق التسويق", "Marketing Team"),
      role: t("شركة تقنية", "Tech Company"),
      rating: 5,
    },
    {
      quote: t(
        "توفير كبير في الوقت والجهد في إعداد التقارير الشهرية.",
        "Significant time and effort savings in preparing monthly reports."
      ),
      author: t("سارة العتيبي", "Sara Al-Otaibi"),
      role: t("محاسبة", "Accountant"),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className={`w-3 h-3 ${isRTL ? "ml-1" : "mr-1"}`} />
            {t("آراء العملاء", "Customer Reviews")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("ماذا يقول عملاؤنا", "What Our Customers Say")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
            <QrCode className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("حمل التطبيق الآن", "Download the App Now")}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t(
              "ابدأ بتنظيم فواتيرك وقراءة سلوك عملائك بشكل ذكي",
              "Start organizing your invoices and reading customer behavior smartly"
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" data-testid="button-download-cta">
              <Smartphone className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("حمل من App Store", "Download from App Store")}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" data-testid="button-download-play">
              <Smartphone className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("حمل من Google Play", "Download from Google Play")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="وسم Wasem" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-md">
              {t(
                "تطبيق ذكي لإدارة الفواتير وتحليل سلوك العملاء. احفظ فواتيرك بسرعة واحصل على رؤى قيمة لتحسين عملك.",
                "A smart app for invoice management and customer behavior analysis. Save your invoices quickly and get valuable insights to improve your business."
              )}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("المميزات", "Features")}
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("كيف يعمل", "How It Works")}
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("من يستخدم وسم", "Use Cases")}
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("الخصوصية", "Privacy")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t("تواصل معنا", "Contact Us")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@wasem.app"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  support@wasem.app
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t(
              "© 2024 وسم. جميع الحقوق محفوظة.",
              "© 2024 Wasem. All rights reserved."
            )}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("سياسة الخصوصية", "Privacy Policy")}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {t("شروط الاستخدام", "Terms of Use")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AppShowcaseSection />
          <HowItWorksSection />
          <FeaturesSection />
          <UseCasesSection />
          <PrivacySection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
