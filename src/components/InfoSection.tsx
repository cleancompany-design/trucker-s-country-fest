import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, FileText, Info, Download, Ticket, ChevronDown } from "lucide-react";

import infoDatum from "@/assets/info-datum.jpg";
import infoLocation from "@/assets/info-location.jpg";
import infoZeiten from "@/assets/info-zeiten.jpg";
import infoKlassen from "@/assets/info-klasseneinteilung.jpg";
import klasseneinteilungPdf from "@/assets/Klasseneinteilung-Truck-und-Country-Festival-5.pdf";

const TICKET_URL = "https://shop.dekra-lausitzring.de/collections/truck-und-country-festival";

const infoCards = [
  {
    icon: Calendar,
    title: "Datum",
    line1: "7. – 9. August 2026",
    img: infoDatum,
  },
  {
    icon: MapPin,
    title: "Location",
    line1: "DEKRA Lausitzring",
    img: infoLocation,
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    img: infoZeiten,
    expandable: true,
  },
  {
    icon: FileText,
    title: "Klasseneinteilung",
    line1: "Übersicht der Fahrzeug-Kategorien",
    line2: "Alle Klassen & Kategorien",
    img: infoKlassen,
    download: klasseneinteilungPdf,
  },
];

const tickets = [
  { name: "Tagesticket", price: "ab €25,00", url: "https://shop.dekra-lausitzring.de/products/dekra-truck-und-country-festival-samstag" },
  { name: "Wochenendticket", price: "ab €40,00", url: "https://shop.dekra-lausitzring.de/products/dekra-truck-und-country-festival-wochenendticket" },
  { name: "Wochenendticket\ninkl. Camping", price: "ab €24,00", url: "https://shop.dekra-lausitzring.de/products/dekra-truck-und-country-festival-camping" },
  { name: "Wochenendticket\ninkl. Truck-Anmeldung", price: "ab €40,00", url: "https://shop.dekra-lausitzring.de/products/dekra-truck-und-country-festival-truck-anmeldung" },
  { name: "Wochenendticket\ninkl. Truck-Gruppenanmeldung", price: "ab €40,00", url: "https://forms.gle/KRgPkr4t2JJNHXUT7" },
  { name: "Konzertticket:\nAlina Sebastian & Truck Stop", price: "€29,00", url: "https://shop.dekra-lausitzring.de/products/alina-sebastian-und-truck-stop" },
  { name: "Konzertticket:\nThe Cashbags", price: "€15,00", url: "https://shop.dekra-lausitzring.de/products/the-cashbags", centered: true },
];

const InfoSection = () => {
  const [zeitenOpen, setZeitenOpen] = useState(false);

  return (
    <section id="infos" className="pt-8 sm:pt-12 pb-20 sm:pb-28 px-4 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <Info className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
            <span>
              Alle <span className="text-primary">Infos</span>
            </span>
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 items-start">
          {infoCards.map((card, i) => {
            const isDownload = 'download' in card && card.download;
            const isExpandable = 'expandable' in card && card.expandable;
            const isAnimated = isDownload;

            if (isExpandable) {
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300 cursor-pointer"
                  onClick={() => setZeitenOpen(!zeitenOpen)}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-3 sm:p-5">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                      <h3 className="font-display text-sm sm:text-lg font-semibold truncate">{card.title}</h3>
                      <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground ml-auto transition-transform duration-300 ${zeitenOpen ? "rotate-180" : ""}`} />
                    </div>
                    {!zeitenOpen && (
                      <p className="text-foreground font-body text-xs sm:text-base mt-1">Details anzeigen</p>
                    )}
                    <AnimatePresence initial={false}>
                      {zeitenOpen && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 sm:space-y-3 mt-2"
                        >
                          <div>
                            <p className="text-primary font-display text-[10px] sm:text-xs font-bold tracking-wide uppercase">Trucker</p>
                            <p className="text-muted-foreground font-body text-[10px] sm:text-xs mt-0.5">Fr 17:00 – So 22:00</p>
                          </div>
                          <div>
                            <p className="text-primary font-display text-[10px] sm:text-xs font-bold tracking-wide uppercase">Camper</p>
                            <p className="text-muted-foreground font-body text-[10px] sm:text-xs mt-0.5">Fr 17:00 – So 20:00</p>
                          </div>
                          <div>
                            <p className="text-primary font-display text-[10px] sm:text-xs font-bold tracking-wide uppercase">Zuschauer</p>
                            <p className="text-muted-foreground font-body text-[10px] sm:text-xs mt-0.5">Fr: Konzert 19:00 / 20:00</p>
                            <p className="text-muted-foreground font-body text-[10px] sm:text-xs mt-0.5">Sa: 10–18 / Konzert 18:00 / 19:00</p>
                            <p className="text-muted-foreground font-body text-[10px] sm:text-xs mt-0.5">So: 10–18 Uhr</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            }

            const Wrapper = isDownload ? 'a' : 'div';
            const wrapperProps = isDownload
              ? { href: (card as any).download, download: true, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={isAnimated ? { y: -4, transition: { duration: 0.25 } } : undefined}
                className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300"
              >
                <Wrapper {...wrapperProps as any} className={isDownload ? "block cursor-pointer" : undefined}>
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <card.icon className="w-5 h-5 text-primary shrink-0" />
                      <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                    </div>
                    {isDownload ? (
                      <div className="flex items-center gap-2 mt-2 text-primary">
                        <Download className="w-4 h-4 shrink-0" />
                        <span className="font-display font-bold text-sm tracking-wider">Download</span>
                      </div>
                    ) : (
                      <p className="text-foreground font-body text-base mt-1">{card.line1}</p>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Ticket overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
            <Ticket className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
            <span>
              Tickets im <span className="text-primary">Überblick</span>
            </span>
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
             {tickets.map((t, i) => (
              <motion.a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`card-rugged rounded-lg p-3 sm:p-5 flex flex-col items-center text-center gap-1 sm:gap-2 cursor-pointer${(t as any).centered ? " col-start-2" : ""}`}
              >
                <span className="font-body text-foreground font-medium text-xs sm:text-sm whitespace-pre-line">{t.name}</span>
                <span className="font-display text-primary font-bold text-base sm:text-lg whitespace-nowrap">{t.price}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-display text-xl px-12 py-5 rounded-lg tracking-wider hover:brightness-110 transition-all animate-[pulse-glow_2.5s_ease-in-out_infinite]"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          >
            JETZT TICKETS SICHERN
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
