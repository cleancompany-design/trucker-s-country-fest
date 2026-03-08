import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Ticket } from "lucide-react";

const TicketCounter = () => {
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
    <div className="flex items-center gap-2 text-sm font-body">
      <Ticket className="w-4 h-4 text-primary" />
      <span className="text-muted-foreground">Noch</span>
      <motion.span
        key={display}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className="font-display font-bold text-primary"
      >
        {display}
      </motion.span>
      <span className="text-muted-foreground">Tickets verfügbar</span>
    </div>
  );
};

export default TicketCounter;
