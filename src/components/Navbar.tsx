import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dekraLogo from "@/assets/dekra-logo.png";

const TICKET_URL = "https://shop.dekra-lausitzring.de/collections/truck-und-country-festival";

const navLinks = [
  { label: "Highlights", href: "#highlights" },
  { label: "Programm", href: "#programm" },
  { label: "Line-Up", href: "#lineup" },
  { label: "Anfahrt", href: "#anfahrt" },
  { label: "Infos & Tickets", href: "#infos" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const highlightsEl = document.getElementById("highlights");
      if (highlightsEl) {
        const rect = highlightsEl.getBoundingClientRect();
        setVisible(rect.top <= 100);
      } else {
        setVisible(window.scrollY > window.innerHeight * 0.85);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    // Delay scroll to allow mobile menu to close
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 sm:h-16">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="shrink-0">
              <img src={dekraLogo} alt="DEKRA Lausitzring" className="h-8 sm:h-10" />
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="font-display text-sm tracking-wider px-3 py-2 rounded hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-primary text-primary-foreground font-display text-sm tracking-wider px-5 py-2 rounded hover:brightness-110 transition-all"
              >
                TICKETS
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
              >
                <div className="px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleClick(link.href)}
                      className="font-display text-base tracking-wider px-4 py-3 rounded text-left hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href={TICKET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-primary text-primary-foreground font-display text-base tracking-wider px-4 py-3 rounded text-center hover:brightness-110 transition-all"
                  >
                    TICKETS
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
