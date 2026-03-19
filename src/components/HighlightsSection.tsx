import { motion } from "framer-motion";
import { Trophy, Music, Tent, Axe, Bird, ShoppingBag, Users, Flame, Zap, Dumbbell } from "lucide-react";

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
    desc: "Internationale Teams manövrieren tonnenschwere Trucks durch Offroad-Sektionen mit steilen Hängen, tiefen Gräben und anspruchsvollen Hindernissen. Präzision und Teamarbeit hautnah!",
    img: hlTrucktrial,
  },
  {
    icon: Flame,
    title: "Show & Shine",
    desc: "Individuell gestaltete Showtrucks treten in verschiedenen Kategorien an – bewertet werden Gestaltung, Individualität und Gesamteindruck. Fahrzeuge aus nächster Nähe erleben!",
    img: hlShowshine,
  },
  {
    icon: Music,
    title: "Country Village",
    desc: "Der atmosphärische Mittelpunkt des Festivals – Western-Flair mit Gastronomie, Live-Musik, Line-Dance und Marktständen. Country-Feeling pur!",
    img: hlCountry,
  },
  {
    icon: Dumbbell,
    title: "Stärkste Spedition",
    desc: "Bis zu 20 Speditionen kämpfen mit je sechs Teilnehmern um den Titel „Stärkste Spedition der Lausitz". Kraft, Geschicklichkeit und echter Teamgeist!",
    img: hlFamily,
  },
  {
    icon: Axe,
    title: "Kettensägenkunst",
    desc: "Live-Speedcarving – wenn aus rohem Holz in Minuten beeindruckende Kunstwerke entstehen. Handwerk hautnah erleben.",
    img: hlChainsaw,
  },
  {
    icon: Bird,
    title: "Falknerei",
    desc: "Eindrucksvolle Greifvogel-Flugshows über dem Festivalgelände. Adler, Falken und Bussarde im freien Flug – eine naturverbundene Erlebnisdimension.",
    img: hlFalconry,
  },
  {
    icon: ShoppingBag,
    title: "Aussteller & Händler",
    desc: "Produkte und Dienstleistungen aus Trucks, Technik, Outdoor, Lifestyle und Handwerk. Dazu Cowboy- und Westernzubehör sowie Merchandise.",
    img: hlExhibitors,
  },
  {
    icon: Tent,
    title: "Camping",
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
              className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Text */}
              <div className="p-5 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <h.icon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display text-lg font-semibold">{h.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
