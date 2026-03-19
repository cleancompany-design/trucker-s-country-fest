import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Music, Tent, Axe, Bird, ShoppingBag, Flame, Dumbbell, X, ChevronLeft, ChevronRight } from "lucide-react";

import hlTrucktrial from "@/assets/hl-trucktrial.jpg";
import hlShowshine from "@/assets/hl-showshine.jpg";
import hlCountry from "@/assets/hl-country.jpg";
import hlChainsaw from "@/assets/hl-chainsaw.jpg";
import hlFalconry from "@/assets/hl-falconry.jpg";
import hlExhibitors from "@/assets/hl-exhibitors.jpg";
import hlCamping from "@/assets/hl-camping.jpg";
import hlStrength from "@/assets/hl-strength.jpg";

const highlights = [
  {
    icon: Trophy,
    title: "Truck Trial EM",
    short: "Internationale Offroad-Meisterschaft mit tonnenschweren Trucks.",
    desc: "Internationale Teams manövrieren tonnenschwere Trucks durch Offroad-Sektionen mit steilen Hängen, tiefen Gräben und anspruchsvollen Hindernissen. Präzision und Teamarbeit hautnah!",
    img: hlTrucktrial,
  },
  {
    icon: Flame,
    title: "Show & Shine",
    short: "Individuell gestaltete Showtrucks in verschiedenen Kategorien.",
    desc: "Individuell gestaltete Showtrucks treten in verschiedenen Kategorien an – bewertet werden Gestaltung, Individualität und Gesamteindruck. Fahrzeuge aus nächster Nähe erleben!",
    img: hlShowshine,
  },
  {
    icon: Music,
    title: "Country Village",
    short: "Western-Flair mit Live-Musik, Line-Dance und Marktständen.",
    desc: "Der atmosphärische Mittelpunkt des Festivals – Western-Flair mit Gastronomie, Live-Musik, Line-Dance und Marktständen. Country-Feeling pur!",
    img: hlCountry,
  },
  {
    icon: Dumbbell,
    title: "Stärkste Spedition",
    short: "Speditionen kämpfen um den Titel der Stärksten.",
    desc: 'Bis zu 20 Speditionen kämpfen mit je sechs Teilnehmern um den Titel „Stärkste Spedition der Lausitz". Kraft, Geschicklichkeit und echter Teamgeist!',
    img: hlStrength,
  },
  {
    icon: Axe,
    title: "Kettensägenkunst",
    short: "Live-Speedcarving – Kunstwerke aus rohem Holz.",
    desc: "Live-Speedcarving – wenn aus rohem Holz in Minuten beeindruckende Kunstwerke entstehen. Handwerk hautnah erleben.",
    img: hlChainsaw,
  },
  {
    icon: Bird,
    title: "Falknerei",
    short: "Greifvogel-Flugshows über dem Festivalgelände.",
    desc: "Eindrucksvolle Greifvogel-Flugshows über dem Festivalgelände. Adler, Falken und Bussarde im freien Flug – eine naturverbundene Erlebnisdimension.",
    img: hlFalconry,
  },
  {
    icon: ShoppingBag,
    title: "Aussteller & Händler",
    short: "Trucks, Technik, Outdoor, Lifestyle und Handwerk.",
    desc: "Produkte und Dienstleistungen aus Trucks, Technik, Outdoor, Lifestyle und Handwerk. Dazu Cowboy- und Westernzubehör sowie Merchandise.",
    img: hlExhibitors,
  },
  {
    icon: Tent,
    title: "Camping",
    short: "Truck- & Country-Camp direkt am Gelände.",
    desc: "Truck- & Country-Camp direkt am Gelände. Campingmöglichkeiten ab Freitag – abends Lagerfeuer, morgens Motorengeräusche.",
    img: hlCamping,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const getItemVariant = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
});

const HighlightsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected !== null) setSelected((selected + 1) % highlights.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected !== null) setSelected((selected - 1 + highlights.length) % highlights.length);
  };

  return (
    <section id="highlights" className="pt-8 sm:pt-12 pb-20 sm:pb-28 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Was dich <span className="text-primary">erwartet</span>
          </h2>
          <div className="section-divider w-48 mx-auto" />
          <p className="text-muted-foreground font-body text-sm mt-6">
            Klicke auf ein Highlight für mehr Details
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={getItemVariant(i)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setSelected(i)}
              className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="relative h-28 sm:h-36 lg:h-44 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-3 sm:p-5 sm:pt-4">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <h.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <h3 className="font-display text-sm sm:text-lg font-semibold truncate">{h.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">{h.short}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail overlay */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            {/* Prev arrow */}
            <button
              onClick={goPrev}
              className="absolute left-4 sm:left-8 z-10 bg-primary text-primary-foreground rounded-full p-3 hover:brightness-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next arrow */}
            <button
              onClick={goNext}
              className="absolute right-4 sm:right-8 z-10 bg-primary text-primary-foreground rounded-full p-3 hover:brightness-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selected}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-3xl w-full card-rugged rounded-lg overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground rounded-full p-2 hover:brightness-110 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={highlights[selected].img}
                alt={highlights[selected].title}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {(() => { const Icon = highlights[selected].icon; return <Icon className="w-7 h-7 text-primary" />; })()}
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-wide">{highlights[selected].title}</h3>
                </div>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  {highlights[selected].desc}
                </p>
              </div>
              <p className="text-center text-muted-foreground text-xs pb-4 font-body">
                Klicken zum Schließen
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HighlightsSection;
