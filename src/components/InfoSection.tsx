import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";
import TicketCounter from "./TicketCounter";
import infoDatum from "@/assets/info-datum.jpg";
import infoLocation from "@/assets/info-location.jpg";
import infoZeiten from "@/assets/info-zeiten.jpg";
import infoTickets from "@/assets/info-tickets.jpg";

const TICKET_URL = "https://shop.dekra-lausitzring.de/collections/truck-und-country-festival";

const infoCards = [
  {
    icon: Calendar,
    title: "Datum",
    line1: "7. – 9. August 2026",
    line2: "Freitag bis Sonntag",
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
    line1: "Jetzt verfügbar",
    line2: "Tages- & Wochenendtickets",
    img: infoTickets,
  },
];

const tickets = [
  { name: "Konzertticket: The Cashbags (Fr)", price: "€15,00" },
  { name: "Konzertticket: Alina Sebastian & Truck Stop (Sa)", price: "€29,00" },
  { name: "Tagesticket", price: "ab €25,00" },
  { name: "Wochenendticket", price: "ab €40,00" },
  { name: "Wochenendticket inkl. Truck-Anmeldung", price: "ab €15,00" },
  { name: "Wochenendticket inkl. Camping", price: "ab €24,00" },
];

const InfoSection = () => {
  return (
    <section id="infos" className="pt-8 sm:pt-12 pb-20 sm:pb-28 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
                  <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                </div>
                <p className="text-foreground font-body text-base">{card.line1}</p>
                <p className="text-muted-foreground font-body text-sm mt-1">{card.line2}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticket overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-center mb-10">
            <Ticket className="inline w-6 h-6 text-primary mr-2 -mt-1" />
            Tickets im <span className="text-primary">Überblick</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
             {tickets.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-rugged rounded-lg p-5 flex items-center justify-between gap-4"
              >
                <span className="font-body text-foreground font-medium text-sm">{t.name}</span>
                <span className="font-display text-primary font-bold text-lg whitespace-nowrap">{t.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-display text-xl px-12 py-5 rounded-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
          >
            JETZT TICKETS SICHERN
          </a>
          <div className="mt-4 flex justify-center">
            <TicketCounter />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
