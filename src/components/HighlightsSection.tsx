import { motion } from "framer-motion";
import { Trophy, Music, Tent, Axe, Bird, ShoppingBag, Users, Flame } from "lucide-react";

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
    desc: "Internationale Teams steuern tonnenschwere Trucks durch extreme Offroad-Parcours. Hautnah miterleben!",
    img: hlTrucktrial,
  },
  {
    icon: Flame,
    title: "Show & Shine",
    desc: "Die geilsten Showtrucks Europas im Contest – Chrome, Airbrush und PS-Wahnsinn vom Feinsten.",
    img: hlShowshine,
  },
  {
    icon: Music,
    title: "Country Village",
    desc: "Live-Musik, Line-Dance, Western-Spiele und Marktstände. Country-Feeling pur!",
    img: hlCountry,
  },
  {
    icon: Axe,
    title: "Kettensägenkunst",
    desc: "Live-Schnitzvorführungen – wenn aus rohem Holz Kunst entsteht. Handwerk hautnah.",
    img: hlChainsaw,
  },
  {
    icon: Bird,
    title: "Falknerei",
    desc: "Greifvogel-Flugshows über dem Festival. Adler, Falken und Bussarde im freien Flug.",
    img: hlFalconry,
  },
  {
    icon: ShoppingBag,
    title: "Aussteller & Händler",
    desc: "Alles rund um Trucks, Outdoor & Lifestyle. Stöbern, entdecken, mitnehmen.",
    img: hlExhibitors,
  },
  {
    icon: Tent,
    title: "Camping",
    desc: "Truck- & Country-Camp direkt am Gelände. Abends Lagerfeuer, morgens Motorengeräusche.",
    img: hlCamping,
  },
  {
    icon: Users,
    title: "Familienprogramm",
    desc: "Erlebnisbereiche für alle Altersgruppen. Hier kommt die ganze Familie auf ihre Kosten.",
    img: hlFamily,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const getItemVariant = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={item}
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
