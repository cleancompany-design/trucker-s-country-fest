import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, Calendar, Truck, Gauge, TreePine, Music, Users, ChevronDown, Download } from "lucide-react";
const programmPosterUrl = "/Truck_Country_Festival_Programm_2026.jpg";

type Item = { time: string; text: string; highlight?: boolean };
type Day = { day: string; date: string; items: Item[] };

const days: Day[] = [
  {
    day: "Freitag",
    date: "07.08.2026",
    items: [
      { time: "ab 15:00", text: "Anreise der Trucks & Camper" },
      { time: "17:00", text: "Eröffnung Festivalgelände durch Tibor Eggestein", highlight: true },
      { time: "20:00", text: "Konzert The Cashbags", highlight: true },
      { time: "ab 22:00", text: "Festivalparty mit DJ Henri", highlight: true },
    ],
  },
  {
    day: "Samstag",
    date: "08.08.2026",
    items: [
      { time: "10:00", text: "Eröffnung Festivalgelände durch Tibor Eggestein", highlight: true },
      { time: "ab 10:00", text: "Beginn / 1. Tag Truck Trial EM" },
      { time: "ab 10:30", text: "Wettkampf „Stärkste Spedition\"" },
      { time: "10:30", text: "Line Dance Vorführung (Hauptbühne)" },
      { time: "11:00", text: "Line Dance Kurs (Hauptbühne)" },
      { time: "11:30", text: "Speedcarving mit Versteigerung" },
      { time: "12:30", text: "Falknershow" },
      { time: "13:30", text: "Monstertruckshow" },
      { time: "14:00", text: "1/4 Meile" },
      { time: "14:00", text: "Line Dance Vorführung (Hauptbühne)" },
      { time: "14:30", text: "Line Dance Kurs (Hauptbühne)" },
      { time: "15:00", text: "Falknershow" },
      { time: "16:00", text: "Monstertruckshow" },
      { time: "16:30", text: "Speedcarving mit Versteigerung" },
      { time: "17:00", text: "Korso" },
      { time: "19:00", text: "Konzert Alina Sebastian (Hauptbühne)", highlight: true },
      { time: "20:30", text: "Konzert Truck Stop (Hauptbühne)", highlight: true },
      { time: "ab 22:00", text: "Festivalparty mit DJ Henri", highlight: true },
    ],
  },
  {
    day: "Sonntag",
    date: "09.08.2026",
    items: [
      { time: "10:00", text: "Eröffnung Festivalgelände durch Tibor Eggestein", highlight: true },
      { time: "ab 10:00", text: "2. Tag Truck Trial EM" },
      { time: "10:30", text: "1/4 Meile" },
      { time: "10:30", text: "Truckergottesdienst" },
      { time: "10:30", text: "Speedcarving mit Versteigerung" },
      { time: "12:00", text: "Line Dance Vorführung (Hauptbühne)" },
      { time: "12:30", text: "Line Dance Kurs (Hauptbühne)" },
      { time: "13:00", text: "Falknershow" },
      { time: "13:30", text: "Konzert Linda Feller (Hauptbühne)", highlight: true },
      { time: "14:30", text: "Konzert Jonny Hill (Hauptbühne)", highlight: true },
      { time: "15:30", text: "Falknershow" },
      { time: "16:00", text: "Line Dance Vorführung (Hauptbühne)" },
      { time: "16:30", text: "Speedcarving mit Versteigerung" },
      { time: "17:00", text: "Siegerehrung Wettkämpfe / Show & Shine / 1/4 Meile", highlight: true },
      { time: "20:00", text: "Siegerehrung Truck Trial", highlight: true },
    ],
  },
];

const chips = [
  { icon: Truck, label: "Truck Trial EM" },
  { icon: Gauge, label: "1/4 Meile Rennen" },
  { icon: TreePine, label: "Speedcarving" },
  { icon: Music, label: "Konzerte & Partys" },
  { icon: Users, label: "Line Dance & Shows" },
];

const ProgrammSection = () => {
  const [openDay, setOpenDay] = useState<string | null>(null);
  return (
    <section id="programm" className="relative py-14 sm:py-20 lg:py-28 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-glow">
            <CalendarClock className="w-8 h-8 sm:w-10 sm:h-10 text-white shrink-0" />
            <span className="text-white">
              Unser <span className="text-primary">Programm</span>
            </span>
          </h2>
          <p className="text-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Der komplette Tagesablauf – 07. bis 09. August 2026.
          </p>
          <div className="section-divider w-48 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10 sm:mb-12"
        >
          {chips.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-2 border border-primary/40 bg-primary/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
            >
              <c.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
              <span className="font-display text-xs sm:text-sm tracking-wider uppercase">
                {c.label}
              </span>
            </div>
          ))}
          <a
            href={programmPosterUrl}
            download="Truck_Country_Festival_Programm_2026.jpg"
            className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="font-display text-xs sm:text-sm tracking-wider uppercase">
              Download
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 items-start">
          {days.map((day, di) => {
            const isOpen = openDay === day.day;
            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: di * 0.15 }}
                className="card-rugged rounded-lg overflow-hidden flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setOpenDay(isOpen ? null : day.day)}
                  aria-expanded={isOpen}
                  className={`w-full bg-primary/10 hover:bg-primary/15 transition-colors px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 text-left ${
                    isOpen ? "border-b border-border" : ""
                  }`}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <h3 className="font-display text-base sm:text-2xl font-semibold tracking-wider">
                    {day.day}
                  </h3>
                  <span className="text-muted-foreground font-body text-xs sm:text-sm ml-auto">
                    {day.date}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="divide-y divide-border overflow-hidden"
                    >
                      {day.items.map((it, idx) => (
                        <li
                          key={`${it.time}-${idx}`}
                          className="grid grid-cols-[6rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-3 px-3 sm:px-5 py-2.5 sm:py-3"
                        >
                          <span className="font-body text-primary text-xs sm:text-sm font-semibold tabular-nums">
                            {it.time}
                          </span>
                          <span
                            className={`font-body text-xs sm:text-sm ${
                              it.highlight ? "font-semibold text-foreground" : "text-foreground/85"
                            }`}
                          >
                            {it.text}
                          </span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>


        <p className="text-center text-xs text-muted-foreground mt-6 font-body">
          Programmänderungen vorbehalten.
        </p>
      </div>
    </section>
  );
};

export default ProgrammSection;
