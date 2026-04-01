import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Calendar } from "lucide-react";
import lineupBg from "@/assets/lineup-bg.jpg";
import artistCashbags from "@/assets/artist-cashbags.png";
import artistAlina from "@/assets/artist-alina.png";
import artistTruckstop from "@/assets/artist-truckstop.png";
import artistLinda from "@/assets/artist-linda.png";
import artistJonny from "@/assets/artist-jonny.png";

const days = [
  {
    day: "Freitag",
    date: "07.08.2026",
    acts: [
      {
        time: "20:00 – 22:00 Uhr",
        name: "The Cashbags",
        img: artistCashbags,
        desc: "Freitagabend findet das Konzert der Band The Cashbags statt. Für diesen Konzertabend ist ein separates Zusatzticket erforderlich. The Cashbags zählen zu den authentischsten Johnny-Cash-Tribute-Bands Europas und begeistern mit einer detailgetreuen Show, originalgetreuen Outfits und beeindruckender Bühnenpräsenz. Im Anschluss sorgt DJ Henri Rutz mit seinem Set für einen stimmungsvollen Ausklang des Abends und perfektioniert den Start in das Festivalwochenende.",
      },
    ],
  },
  {
    day: "Samstag",
    date: "08.08.2026",
    acts: [
      {
        time: "19:00 – 20:30 Uhr",
        name: "Alina Sebastian",
        img: artistAlina,
        desc: "Alina Sebastian begeistert mit einer kraftvollen Stimme, authentischen Texten und einer Bühnenpräsenz, die sofort Nähe schafft. Ihre Musik verbindet moderne Pop-Elemente mit emotionalem Singer-Songwriter-Sound und erzählt Geschichten, die berühren und mitreißen. Live überzeugt sie mit natürlicher Ausstrahlung, musikalischer Präzision und einer Energie, die das Publikum sofort einfängt. Alina Sebastian steht für ehrliche Musik, starke Emotionen und besondere Momente, die lange nachklingen.",
      },
      {
        time: "20:30 – 22:30 Uhr",
        name: "Truck Stop",
        img: artistTruckstop,
        desc: "Truck Stop ist die Kultband des deutschen Country und seit Jahrzehnten ein Garant für gute Stimmung, starke Songs und echte Western-Atmosphäre. Mit ihrem unverwechselbaren Sound, eingängigen Melodien und charismatischem Bühnenauftritt begeistern sie Fans aller Generationen. Live liefern sie eine energiegeladene Show voller Hits, Humor und Herzblut. Truck Stop verbindet Tradition mit modernem Country-Feeling und sorgt für ein Konzerterlebnis, das sofort ins Ohr geht und lange im Gedächtnis bleibt.",
      },
    ],
  },
  {
    day: "Sonntag",
    date: "09.08.2026",
    acts: [
      {
        time: "13:30 – 14:30 Uhr",
        name: "Linda Feller",
        img: artistLinda,
        desc: "Linda Feller bringt am Sonntagnachmittag echten Glanz auf die Bühne. Mit ihrer warmen Stimme, ihrem modernen Country-Sound und ihrer charmanten Art sorgt sie für einen emotionalen, kraftvollen Abschluss des Festivalwochenendes. Sie verbindet Tradition mit frischem Drive und schafft Momente, die direkt ins Herz gehen. Ihr Konzert ist für alle Zuschauer, Fahrer und Beifahrer im Wochenendticket enthalten und garantiert einen Ausklang, der lange nachklingt.",
      },
      {
        time: "14:30 – 15:30 Uhr",
        name: "Jonny Hill",
        img: artistJonny,
        desc: "Jonny Hill sorgt am Sonntagnachmittag für einen besonderen musikalischen Abschluss. Mit seiner markanten Erzählstimme, seinen zeitlosen Songs und der legendären Truckerhymne, die Generationen von Fahrern begleitet hat, bringt er echtes Country-Feeling auf die Bühne. Seine Lieder erzählen Geschichten von Freiheit, Straße und Leben – authentisch, warm und voller Gefühl. Auch sein Konzert ist für alle Zuschauer, Fahrer und Beifahrer im Wochenendticket enthalten und rundet das Festival mit Gänsehautmomenten ab.",
      },
    ],
  },
];

const ActCard = ({ act }: { act: typeof days[0]["acts"][0] }) => {
  const [flipped, setFlipped] = useState(false);
  const hasDesc = !!act.desc;

  return (
    <div
      className={`flex-1 flex items-center justify-center transition-colors ${hasDesc ? "cursor-pointer hover:bg-primary/5" : ""}`}
      onClick={() => hasDesc && setFlipped(!flipped)}
    >
      {flipped && hasDesc ? (
        <div className="px-4 sm:px-6 py-4 sm:py-5 w-full">
          <p className="text-muted-foreground font-body text-xs sm:text-sm leading-relaxed">
            {act.desc}
          </p>
        </div>
      ) : (
        <div className="grid w-full max-w-[22rem] grid-cols-[6rem_1fr] sm:grid-cols-[8rem_1fr] items-center gap-3 sm:gap-4 px-3 sm:px-6 py-3 sm:py-5">
          <div className="flex items-center justify-center">
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
          </div>
          <div className="text-left">
            <span className="font-body text-primary font-semibold text-xs sm:text-sm block mb-0.5 sm:mb-1">
              {act.time}
            </span>
            <span className="font-display text-base sm:text-2xl font-bold tracking-wide">
              {act.name}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:items-stretch">
          {days.map((day, di) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: di * 0.15 }}
              className="card-rugged rounded-lg overflow-hidden flex flex-col"
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

              <div className="divide-y divide-border flex-1 flex flex-col">
                {day.acts.map((act) => (
                  <ActCard key={act.name} act={act} />
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
