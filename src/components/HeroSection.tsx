import { motion } from "framer-motion";
import heroImg from "@/assets/hero-truck.jpg";
import dekraLogo from "@/assets/dekra-logo.png";
import Countdown from "./Countdown";
import TicketCounter from "./TicketCounter";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Truck Trial Action beim Truck & Country Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* DEKRA Logo top-left */}
      <div className="absolute top-6 left-6 z-20">
        <img src={dekraLogo} alt="DEKRA Lausitzring" className="h-10 sm:h-14 opacity-80" />
      </div>

      {/* Ticket counter top-right */}
      <div className="absolute top-7 right-6 z-20">
        <TicketCounter />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground font-display text-lg sm:text-xl tracking-[0.3em] mb-4 font-semibold"
        >
          08. – 09. AUGUST 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)" }}
        >
          TRUCK &<br />
          <span className="text-primary text-glow">COUNTRY</span>
          <br />FESTIVAL
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-6 mb-10 text-muted-foreground"
        >
          <span className="flex items-center gap-2 font-body">
            <MapPin className="w-4 h-4 text-primary" />
            DEKRA Lausitzring
          </span>
          <span className="flex items-center gap-2 font-body">
            <Calendar className="w-4 h-4 text-primary" />
            2 Tage Action
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center mb-10"
        >
          <Countdown />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          href="https://shop.dekra-lausitzring.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display text-lg sm:text-xl px-10 py-4 rounded-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
        >
          TICKETS SICHERN
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
