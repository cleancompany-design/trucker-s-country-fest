import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import truckTrialImg from "@/assets/truck-trial.jpg";
import countryVillageImg from "@/assets/country-village.jpg";

const sections = [
  {
    img: truckTrialImg,
    alt: "Truck Trial Europameisterschaft",
    title: "Truck Trial EM 2026",
    short: "Im sportlichen Mittelpunkt steht die Truck-Trial-Europameisterschaft, bei der internationale Teams tonnenschwere Trucks durch Offroad-Sektionen manövrieren.",
    full: " Ergänzt wird das Programm durch den großen Truck-Korso auf der Langstrecke des DEKRA Lausitzrings, die spektakuläre Monstertruckshow und die ¼ Meile – wo Trucks im direkten Beschleunigungsvergleich gegeneinander antreten.",
    reverse: false,
  },
  {
    img: countryVillageImg,
    alt: "Country Village mit Marktständen und Lichterketten",
    title: "Country Village",
    short: "Das Country Village bildet den atmosphärischen Mittelpunkt des Festivals und verbindet Western-Flair mit Gastronomie, Musik und Aufenthaltsqualität.",
    full: " Live-Musik, Line-Dance, Western-Spiele und Marktstände laden zum Verweilen ein. Handwerksvorführungen, Kettensägenkunst und Greifvogel-Flugshows – hier trifft raue Trucker-Kultur auf entspannte Festivalatmosphäre.",
    reverse: true,
  },
];

const ShowcaseSection = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <section id="programm" className="pt-8 sm:pt-12 pb-12 sm:pb-20 lg:pb-28 px-4 bg-secondary/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-14">
        {sections.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: s.reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 sm:gap-8 lg:gap-12 items-center`}
          >
            <motion.div
              className="lg:w-1/2"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-44 sm:h-56 lg:h-80 object-cover object-center hover:scale-105 transition-transform duration-700 aspect-video"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                {s.title}
              </h2>
              <div className="section-divider w-24 mb-4 sm:mb-6" />

              {/* Desktop: full text */}
              <p className="hidden lg:block text-muted-foreground font-body text-lg leading-relaxed">
                {s.short}{s.full}
              </p>

              {/* Mobile/Tablet: collapsible */}
              <div className="lg:hidden">
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  {s.short}
                  {expanded[idx] && <span>{s.full}</span>}
                </p>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                  className="mt-2 flex items-center gap-1 text-primary font-body text-sm hover:brightness-125 transition-all"
                >
                  {expanded[idx] ? "Weniger anzeigen" : "Mehr lesen"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${expanded[idx] ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
