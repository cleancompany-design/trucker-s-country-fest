import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Flame, AlertTriangle } from "lucide-react";

const FomoBlock = () => {
  const [ticketsLeft, setTicketsLeft] = useState(347);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, ticketsLeft, {
      duration: 2,
      ease: "easeOut",
    });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [ticketsLeft]);

  // Simulate slow ticket decrease
  useEffect(() => {
    const interval = setInterval(() => {
      setTicketsLeft((prev) => {
        const decrease = Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0;
        return Math.max(prev - decrease, 12);
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-card">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-lg opacity-20"
            style={{ boxShadow: "inset 0 0 30px hsla(153, 100%, 25%, 0.3)" }}
          />

          <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Left: urgency */}
            <div className="flex flex-col items-center sm:items-start gap-2 shrink-0">
              <div className="flex items-center gap-2 text-primary">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-display text-sm tracking-widest uppercase">Begrenztes Kontingent</span>
              </div>
              <div className="flex items-baseline gap-2">
                <motion.span
                  key={display}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  className="font-display text-5xl sm:text-6xl font-bold text-primary"
                >
                  {display}
                </motion.span>
                <span className="font-display text-xl text-muted-foreground">Tickets</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                noch verfügbar – danach ausverkauft
              </p>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center sm:items-end gap-3 sm:ml-auto">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Flame className="w-4 h-4 text-accent" />
                <span className="text-sm font-body">Hohe Nachfrage</span>
              </div>
              <a
                href="https://shop.dekra-lausitzring.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-display text-lg px-8 py-3 rounded-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
              >
                JETZT SICHERN
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FomoBlock;
