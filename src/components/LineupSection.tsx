import { motion } from "framer-motion";
import { Music, Calendar } from "lucide-react";
import lineupBg from "@/assets/lineup-bg.jpg";

const days = [
  {
    day: "Freitag",
    date: "07.08.2026",
    acts: [
      { time: "20:00 – 22:00 Uhr", name: "The Cashbags" },
    ],
  },
  {
    day: "Samstag",
    date: "08.08.2026",
    acts: [
      { time: "19:00 – 20:30 Uhr", name: "Alina Sebastian" },
      { time: "20:30 – 22:30 Uhr", name: "Truck Stop" },
    ],
  },
  {
    day: "Sonntag",
    date: "09.08.2026",
    acts: [
      { time: "13:30 – 14:30 Uhr", name: "Linda Feller" },
      { time: "14:30 – 15:30 Uhr", name: "Jonny Hill" },
    ],
  },
];

const LineupSection = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Static background image – visible behind header, fades to black before cards */}
      <div className="absolute inset-0">
        <img
          src={lineupBg}
          alt=""
          className="w-full h-[60%] object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <Music className="inline w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 -mt-1" />
            Line-<span className="text-primary">Up</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Live-Acts aus dem Country-Bereich sorgen an allen drei Tagen für stimmungsvolle Abendunterhaltung und echte Festivalatmosphäre.
          </p>
          <div className="section-divider w-48 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {days.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: di * 0.15 }}
              className="card-rugged rounded-lg overflow-hidden"
            >
              <div className="bg-primary/10 border-b border-border px-6 py-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-wider">
                  {day.day}
                </h3>
                <span className="text-muted-foreground font-body text-sm ml-auto">
                  {day.date}
                </span>
              </div>

              <div className="divide-y divide-border">
                {day.acts.map((act) => (
                  <div
                    key={act.name}
                    className="px-6 py-5 hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-body text-primary font-semibold text-sm block mb-1">
                      {act.time}
                    </span>
                    <span className="font-display text-xl sm:text-2xl font-bold tracking-wide">
                      {act.name}
                    </span>
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
