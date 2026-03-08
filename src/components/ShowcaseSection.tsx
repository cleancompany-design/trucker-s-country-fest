import { motion } from "framer-motion";
import truckTrialImg from "@/assets/truck-trial.jpg";
import countryVillageImg from "@/assets/country-village.jpg";

const sections = [
  {
    img: truckTrialImg,
    alt: "Truck Trial Europameisterschaft",
    title: "Truck Trial EM 2026",
    text: "Internationale Teams steuern tonnenschwere Lastkraftwagen, historische Oldtimer-Lkw und leistungsstarke Zugmaschinen durch technisch anspruchsvolle Parcours mit Steilhängen, Verschränkungen, Gräben und Hindernissen. Präzision, Teamarbeit und pure Fahrzeugbeherrschung – aus nächster Nähe.",
    reverse: false,
  },
  {
    img: countryVillageImg,
    alt: "Country Village mit Marktständen und Lichterketten",
    title: "Country Village",
    text: "Wenn die Motoren leiser werden, dreht das Country Village auf. Live-Musik, Line-Dance, Western-Spiele und Marktstände laden zum Verweilen ein. Handwerksvorführungen, Kettensägenkunst und Greifvogel-Flugshows – hier trifft raue Trucker-Kultur auf entspannte Festivalatmosphäre.",
    reverse: true,
  },
];

const ShowcaseSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-20">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: s.reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className={`flex flex-col ${s.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
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
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
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
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                {s.title}
              </h2>
              <div className="section-divider w-24 mb-6" />
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
