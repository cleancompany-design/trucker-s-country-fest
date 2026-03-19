import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "tcf-cookie-consent";

type ConsentState = "pending" | "accepted" | "essential";

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentState>("accepted");

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      setConsent("pending");
    }
  }, []);

  const accept = (type: "accepted" | "essential") => {
    localStorage.setItem(COOKIE_KEY, type);
    setConsent(type);
  };

  if (consent !== "pending") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-[60] p-4"
      >
        <div className="max-w-4xl mx-auto card-rugged rounded-lg p-5 sm:p-6 border border-border shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="bg-primary/15 rounded-full p-2.5 shrink-0 mt-0.5">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Technisch notwendige Cookies sind für die Funktionalität der Seite erforderlich. 
                Optionale Cookies helfen uns, die Website zu verbessern und Inhalte zu personalisieren. 
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={() => accept("accepted")}
                  className="bg-primary text-primary-foreground font-display text-sm tracking-wider px-6 py-2.5 rounded hover:brightness-110 transition-all"
                >
                  ALLE AKZEPTIEREN
                </button>
                <button
                  onClick={() => accept("essential")}
                  className="border border-border text-foreground font-display text-sm tracking-wider px-6 py-2.5 rounded hover:bg-primary/10 transition-colors"
                >
                  NUR NOTWENDIGE
                </button>
              </div>
            </div>
            <button
              onClick={() => accept("essential")}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
