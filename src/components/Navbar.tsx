import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import dekraLogo from "@/assets/dekra-logo.png";
import ovwaLogo from "@/assets/ovwa-logo.png";

const TICKET_URL = "https://shop.dekra-lausitzring.de/collections/truck-und-country-festival";

const navLinks: { label: string; href: string; isPage?: boolean }[] = [
  { label: "Highlights", href: "#highlights" },
  { label: "Line-Up", href: "#lineup" },
  { label: "Programm", href: "#programm" },
  { label: "Anfahrt", href: "#anfahrt" },
  { label: "Infos & Tickets", href: "#infos" },
  { label: "FAQ", href: "/faq", isPage: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false);
    if (link.isPage) {
      navigate(link.href);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + link.href);
      return;
    }
    setTimeout(() => {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 sm:h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="shrink-0 flex items-center gap-2">
          <img src={ovwaLogo} alt="OVWA" className="h-7 sm:h-9 bg-white rounded px-1 py-0.5" />
          <img src={dekraLogo} alt="DEKRA Lausitzring" className="h-7 sm:h-9 bg-white rounded px-1 py-0.5" />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link)}
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
                  onClick={() => handleClick(link)}
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
    </nav>
  );
};

export default Navbar;
