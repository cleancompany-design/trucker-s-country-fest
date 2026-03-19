import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Music, Tent, Axe, Bird, ShoppingBag, Flame, Dumbbell, X } from "lucide-react";

import hlTrucktrial from "@/assets/hl-trucktrial.jpg";
import hlShowshine from "@/assets/hl-showshine.jpg";
import hlCountry from "@/assets/hl-country.jpg";
import hlChainsaw from "@/assets/hl-chainsaw.jpg";
import hlFalconry from "@/assets/hl-falconry.jpg";
import hlExhibitors from "@/assets/hl-exhibitors.jpg";
import hlCamping from "@/assets/hl-camping.jpg";
import hlFamily from "@/assets/hl-family.jpg";

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
    img: hlFamily,
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

  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
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
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={getItemVariant(i)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setSelected(i)}
              className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <h.icon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.short}</p>
                <p className="text-xs text-primary mt-2 font-body">Klicken für mehr →</p>
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
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full card-rugged rounded-lg overflow-hidden cursor-default"
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
                className="w-full h-56 sm:h-72 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {(() => { const Icon = highlights[selected].icon; return <Icon className="w-6 h-6 text-primary" />; })()}
                  <h3 className="font-display text-2xl font-bold">{highlights[selected].title}</h3>
                </div>
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  {highlights[selected].desc}
                </p>
              </div>
              <p className="text-center text-muted-foreground text-sm pb-4 font-body">
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
