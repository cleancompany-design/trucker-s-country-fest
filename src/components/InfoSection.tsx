import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="card-rugged rounded-lg p-8 flex items-start gap-4">
            <Calendar className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">Datum</h3>
              <p className="text-muted-foreground font-body text-lg">8. – 9. August 2026</p>
              <p className="text-muted-foreground font-body text-sm mt-1">Samstag & Sonntag</p>
            </div>
          </div>

          <div className="card-rugged rounded-lg p-8 flex items-start gap-4">
            <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground font-body text-lg">DEKRA Lausitzring</p>
              <p className="text-muted-foreground font-body text-sm mt-1">Offroad-Gelände, Klettwitz</p>
            </div>
          </div>

          <div className="card-rugged rounded-lg p-8 flex items-start gap-4">
            <Clock className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">Öffnungszeiten</h3>
              <p className="text-muted-foreground font-body text-lg">Ganztägig</p>
              <p className="text-muted-foreground font-body text-sm mt-1">Camping ab Freitag möglich</p>
            </div>
          </div>

          <div className="card-rugged rounded-lg p-8 flex items-start gap-4">
            <Ticket className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">Tickets</h3>
              <p className="text-muted-foreground font-body text-lg">Infos folgen in Kürze</p>
              <p className="text-muted-foreground font-body text-sm mt-1">Tages- & Wochenendtickets</p>
            </div>
          </div>
        </motion.div>

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
