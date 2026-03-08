import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";
// Unique images for each info card
import infoDatum from "@/assets/info-datum.jpg";
import infoLocation from "@/assets/info-location.jpg";
import infoZeiten from "@/assets/info-zeiten.jpg";
import infoTickets from "@/assets/info-tickets.jpg";

const infoCards = [
  {
    icon: Calendar,
    title: "Datum",
    line1: "8. – 9. August 2026",
    line2: "Samstag & Sonntag",
    img: infoDatum,
  },
  {
    icon: MapPin,
    title: "Location",
    line1: "DEKRA Lausitzring",
    line2: "Offroad-Gelände, Klettwitz",
    img: infoLocation,
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    line1: "Ganztägig",
    line2: "Camping ab Freitag möglich",
    img: infoZeiten,
  },
  {
    icon: Ticket,
    title: "Tickets",
    line1: "Infos folgen in Kürze",
    line2: "Tages- & Wochenendtickets",
    img: infoTickets,
  },
];

const InfoSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Alle <span className="text-primary">Infos</span>
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="card-rugged rounded-lg overflow-hidden group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <card.icon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-foreground font-body text-lg">{card.line1}</p>
                <p className="text-muted-foreground font-body text-sm mt-1">{card.line2}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://shop.dekra-lausitzring.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-display text-xl px-12 py-5 rounded-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
          >
            JETZT TICKETS SICHERN
          </a>
          <p className="mt-4 text-muted-foreground font-body text-sm">
            Sei dabei – bevor es ausverkauft ist.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
