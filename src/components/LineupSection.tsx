import { motion } from "framer-motion";
import { Music, Calendar } from "lucide-react";
import lineupBg from "@/assets/lineup-bg.jpg";
import artistCashbags from "@/assets/artist-cashbags.png";
import artistAlina from "@/assets/artist-alina.png";
import artistLinda from "@/assets/artist-linda.png";
import artistJonny from "@/assets/artist-jonny.png";

const days = [
  {
    day: "Freitag",
    date: "07.08.2026",
    acts: [
      { time: "20:00 – 22:00 Uhr", name: "The Cashbags", img: artistCashbags },
    ],
  },
  {
    day: "Samstag",
    date: "08.08.2026",
    acts: [
      { time: "19:00 – 20:30 Uhr", name: "Alina Sebastian", img: artistAlina },
      { time: "20:30 – 22:30 Uhr", name: "Truck Stop", img: null },
    ],
  },
  {
    day: "Sonntag",
    date: "09.08.2026",
    acts: [
      { time: "13:30 – 14:30 Uhr", name: "Linda Feller", img: artistLinda },
      { time: "14:30 – 15:30 Uhr", name: "Jonny Hill", img: artistJonny },
    ],
  },
];

const LineupSection = () => {
  return (
    <section id="lineup" className="relative py-14 sm:py-20 lg:py-28 px-4 overflow-hidden scroll-mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${lineupBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/65 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-glow">
            <Music className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
            <span>
              Line-<span className="text-primary">Up</span>
            </span>
          </h2>
          <p className="text-foreground/80 font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Live-Acts aus dem Country-Bereich sorgen an allen drei Tagen für stimmungsvolle Abendunterhaltung und echte Festivalatmosphäre.
          </p>
          <div className="section-divider w-48 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:items-start">
          {days.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: di * 0.15 }}
              className="card-rugged rounded-lg overflow-hidden"
            >
              <div className="bg-primary/10 border-b border-border px-3 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <h3 className="font-display text-base sm:text-2xl font-semibold tracking-wider">
                  {day.day}
                </h3>
                <span className="text-muted-foreground font-body text-xs sm:text-sm ml-auto">
                  {day.date}
                </span>
              </div>

              <div className="divide-y divide-border">
                {day.acts.map((act) => (
                  <div
                    key={act.name}
                    className="px-3 sm:px-6 py-3 sm:py-5 hover:bg-primary/5 transition-colors flex items-center justify-center gap-3 sm:gap-4"
                  >
                    {act.img ? (
                      <img
                        src={act.img}
                        alt={act.name}
                        loading="lazy"
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-primary/30 shrink-0"
                      />
                    ) : (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 border-2 border-primary/30 shrink-0 flex items-center justify-center">
                        <Music className="w-10 h-10 sm:w-14 sm:h-14 text-primary/40" />
                      </div>
                    )}
                    <div>
                      <span className="font-body text-primary font-semibold text-xs sm:text-sm block mb-0.5 sm:mb-1">
                        {act.time}
                      </span>
                      <span className="font-display text-base sm:text-2xl font-bold tracking-wide">
                        {act.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineupSection;
