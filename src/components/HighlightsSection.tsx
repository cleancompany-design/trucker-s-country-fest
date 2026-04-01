import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, Flame, Music, Dumbbell, Axe, Bird, ShoppingBag,
  Gamepad2, Truck, Mic, Gauge, Sparkles,
  X, ChevronLeft, ChevronRight, Star,
} from "lucide-react";

import hlTrucktrial from "@/assets/hl-trucktrial.jpg";
import hlShowshine from "@/assets/hl-showshine.jpg";
import hlCountry from "@/assets/hl-country.jpg";
import hlChainsaw from "@/assets/hl-chainsaw.jpg";
import hlFalconry from "@/assets/hl-falconry.jpg";
import hlExhibitors from "@/assets/hl-exhibitors.jpg";
import hlStrength from "@/assets/hl-strength.jpg";
import hlRctruck from "@/assets/hl-rctruck.jpg";
import hlMonstertruck from "@/assets/hl-monstertruck.jpg";
import hlKonzerte from "@/assets/hl-konzerte.jpg";
import hlViertelmeile from "@/assets/hl-viertelmeile.jpg";
import hlErlebniswelt from "@/assets/hl-erlebniswelt.jpg";

const highlights = [
  {
    icon: Trophy,
    title: "Truck Trial EM",
    short: "Internationale Offroad-Meisterschaft.",
    desc: "Im sportlichen Mittelpunkt des Truck und Country Festivals steht die Truck-Trial-Europameisterschaft, bei der internationale Teams tonnenschwere Trucks und leistungsstarke Zugmaschinen präzise durch Offroad-Sektionen mit steilen Hängen, tiefen Gräben und anspruchsvollen Hindernissen manövrieren.",
    img: hlTrucktrial,
  },
  {
    icon: Flame,
    title: "Show & Shine",
    short: "Individuell gestaltete Showtrucks.",
    desc: "Beim Show & Shine Truck Contest treten individuell gestaltete Showtrucks in verschiedenen Kategorien gegeneinander an, bewertet werden Gestaltung, Individualität und Gesamteindruck. Besucher erleben die Fahrzeuge aus nächster Nähe und tauschen sich direkt mit den Besitzern aus.",
    img: hlShowshine,
  },
  {
    icon: Dumbbell,
    title: "Stärkste Spedition",
    short: "Speditionen kämpfen um den Titel.",
    desc: 'Am Samstag und Sonntag treten bis zu 20 Speditionen mit bis zu sechs Teilnehmern gegeneinander an und kämpfen um den Titel „Stärkste Spedition der Lausitz". Gefordert sind Kraft, Geschicklichkeit und vor allem echter Teamgeist.',
    img: hlStrength,
  },
  {
    icon: Music,
    title: "Country Village",
    short: "Western-Flair mit Gastronomie und Musik.",
    desc: "Das Country Village bildet den atmosphärischen Mittelpunkt des Festivals und verbindet Western-Flair mit Gastronomie, Musik und Aufenthaltsqualität.",
    img: hlCountry,
  },
  {
    icon: ShoppingBag,
    title: "Aussteller & Händler",
    short: "Trucks, Technik und Handwerk.",
    desc: "Im Händler- und Ausstellerbereich präsentieren Unternehmen Produkte und Dienstleistungen aus den Bereichen Trucks, Technik, Outdoor, Lifestyle und Handwerk. Ergänzt wird das Angebot durch Cowboy- und Westernzubehör sowie Merchandise.",
    img: hlExhibitors,
  },
  {
    icon: Axe,
    title: "Kettensägenkunst",
    short: "Speedcarving – Kunstwerke aus Holz.",
    desc: "Live-Speedcarving – wenn aus rohem Holz in Minuten beeindruckende Kunstwerke entstehen. Handwerk hautnah erleben.",
    img: hlChainsaw,
  },
  {
    icon: Bird,
    title: "Falknerei",
    short: "Greifvogel-Flugshows.",
    desc: "Erfahrene Falkner des Jagdfalkenhofs Schaaf präsentieren an beiden Veranstaltungstagen eindrucksvolle Flugvorführungen. Insgesamt elf Greifvögel zeigen in zwei Shows pro Tag ihre beeindruckenden Flugkünste. Besucher erleben die Tiere aus nächster Nähe, wenn Adler, Falken und Bussarde lautlos über das Gelände gleiten und ihre Schnelligkeit sowie Präzision demonstrieren. Gleichzeitig erhalten sie spannende Einblicke in die traditionsreiche Kunst der Falknerei und den respektvollen Umgang mit diesen faszinierenden Tieren.",
    img: hlFalconry,
  },
  {
    icon: Gamepad2,
    title: "RC Truck Trial",
    short: "Offroad-Wettbewerb im Modellformat.",
    desc: "Handgebaute Lkw-Unikate, anspruchsvolle Geländeparcours und maximale Präzision am Steuer – das ist RC Truck Trial. Detailgetreue Modell-Trucks bewegen sich durch technisch fordernde Sektionen mit Steigungen, Verschränkungen und engen Toren. Entscheidend ist nicht Geschwindigkeit, sondern exakte Fahrzeugkontrolle, saubere Linienwahl und fahrerisches Können. Alle Fahrzeuge sind individuelle Eigenbauten, die mit technischem Know-how, handwerklichem Können und viel Leidenschaft entstehen.",
    img: hlRctruck,
  },
  {
    icon: Truck,
    title: "Monstertruckshow",
    short: "Pure Action mit spektakulären Manövern.",
    desc: "Die Monstertruckshow bringt pure Action auf das Festivalgelände, wenn die gewaltigen Fahrzeuge mit kraftvollen Manövern und spektakulären Sprüngen begeistern. Dabei demonstrieren die Trucks eindrucksvoll Leistung, Kontrolle und Show-Charakter zugleich. Die beiden Monstertruckshows finden am Samstagnachmittag statt und sind ein weiteres Highlight auf dem Truck & Country Festival.",
    img: hlMonstertruck,
  },
  {
    icon: Mic,
    title: "Konzerte",
    short: "Live-Acts aus dem Country-Bereich.",
    desc: "Die Konzerte finden am Freitag, Samstag und Sonntag statt und setzen an jedem Veranstaltungstag musikalische Akzente. Mit Live-Acts aus dem Country-Bereich sorgen sie für durchgängige Abendunterhaltung und eine stimmungsvolle Festivalatmosphäre.",
    img: hlKonzerte,
  },
  {
    icon: Gauge,
    title: "¼ Meile Rennen & Truck Korso",
    short: "Der rohe Beschleunigungs-Vergleich.",
    desc: "Ihr wollt euren Truck nicht nur ausstellen, sondern zeigen, was unter der Motorhaube steckt? Dann nutzt unsere zwei Highlights: Beim Truck-Korso fahren zahlreiche Trucks gemeinsam über Hochgeschwindigkeitsoval und Rennstrecke – ein Erlebnis, das lange bleibt. Beim ¼-Meile-Showrennen zählt pure Schnelligkeit: Sobald die Ampel auf Grün springt, kann jeder Fahrer seine Maschine voll ausreizen und zeigen, was in ihm und seinem Truck steckt. Die Anmeldung erfolgt über den Ticketshop oder die Gruppenanmeldung.",
    img: hlViertelmeile,
  },
  {
    icon: Sparkles,
    title: "Festival-Erlebniswelt",
    short: "Kinderprogramm, Line-Dance und mehr.",
    desc: "Freut euch auf ein umfangreiches Kinderprogramm, das kleine Entdecker den ganzen Tag begeistert. Dazu gibt's mitreißende Line‑Dance‑Sessions, actionreiches Bullriding und Bogenschießen für alle, die ihre Treffsicherheit testen wollen. Ein echtes Highlight: atemberaubende Hubschrauberrundflüge, die euch das Festivalgelände aus der Vogelperspektive erleben lassen.",
    img: hlErlebniswelt,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const getItemVariant = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 15 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
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
    <section id="highlights" className="pt-2 sm:pt-4 pb-16 sm:pb-20 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
            <span>
              Was dich <span className="text-primary">erwartet</span>
            </span>
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={getItemVariant(i)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setSelected(i)}
              className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="relative h-24 sm:h-28 lg:h-32 overflow-hidden">
                <img
                  src={h.img}
                  alt={h.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-2 sm:p-3">
                <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                  <h.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                  <h3 className="font-display text-sm sm:text-base font-semibold truncate">{h.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">{h.short}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail overlay – text below image */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={goPrev}
              className="absolute left-4 sm:left-8 z-10 bg-primary text-primary-foreground rounded-full p-3 hover:brightness-110 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goNext}
              className="absolute right-4 sm:right-8 z-10 bg-primary text-primary-foreground rounded-full p-3 hover:brightness-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full card-rugged rounded-lg overflow-hidden cursor-default max-h-[90vh] overflow-y-auto"
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
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {(() => { const Icon = highlights[selected].icon; return <Icon className="w-7 h-7 text-primary shrink-0" />; })()}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide">{highlights[selected].title}</h3>
                </div>
                <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed">
                  {highlights[selected].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HighlightsSection;
