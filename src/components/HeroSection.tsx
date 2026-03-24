import { motion } from "framer-motion";
import heroImg from "@/assets/hero-truck.jpg";
import dekraLogo from "@/assets/dekra-logo.png";
import ovwaLogo from "@/assets/ovwa-logo.png";
import tcfLogo from "@/assets/tcf-logo.png";
import Countdown from "./Countdown";
import { Calendar, MapPin } from "lucide-react";

const TICKET_URL = "https://shop.dekra-lausitzring.de/collections/truck-und-country-festival";

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

      {/* Logos top corners */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
        <img src={ovwaLogo} alt="OVWA" className="h-10 sm:h-14 opacity-90" />
        <img src={dekraLogo} alt="DEKRA Lausitzring" className="h-10 sm:h-14 opacity-80" />
      </div>
      <div className="absolute top-6 right-4 sm:right-6 z-20">
        <img src={tcfLogo} alt="Truck & Country Festival 2026" className="h-10 sm:h-14 lg:h-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground font-display text-xl sm:text-2xl lg:text-3xl tracking-[0.3em] mb-4 font-semibold"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
        >
          07. – 09. AUGUST 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 3, rotate: -8 }}
          animate={{ opacity: 1, scale: [3, 0.95, 1], rotate: [-8, 1, 0] }}
          transition={{
            delay: 0.5,
            duration: 2,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            scale: { duration: 2, times: [0, 0.85, 1] },
            rotate: { duration: 2, times: [0, 0.85, 1] },
          }}
          className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold leading-[0.9] mb-6 whitespace-nowrap"
        >
          <motion.span
            className="text-primary text-glow inline-block"
            initial={{
              textShadow: "none",
            }}
            animate={{
              textShadow: [
                // Start: no glow (during flight)
                "0 0 0px rgba(255,50,10,0)",
                // Instant red glow on landing
                "0 0 80px rgba(255,50,10,1), 0 0 40px rgba(255,80,20,0.9), 0 0 15px rgba(255,40,10,0.7)",
                // Cool to black shadow
                "0 0 30px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.7)",
                // Fade to subtle
                "0 2px 8px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.2)",
              ],
            }}
            transition={{
              textShadow: {
                delay: 0.5,
                duration: 5,
                times: [0, 0.4, 0.6, 1],
                ease: "easeOut",
              },
            }}
          >
            TRUCK & COUNTRY FESTIVAL
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 mb-10"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
        >
          <span className="flex items-center gap-2 font-body text-foreground/90">
            <MapPin className="w-4 h-4 text-primary drop-shadow-lg" />
            DEKRA Lausitzring
          </span>
          <span className="flex items-center gap-2 font-body text-foreground/90">
            <Calendar className="w-4 h-4 text-primary drop-shadow-lg" />
            2,5 Tage Action
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mb-10"
        >
          <Countdown />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-display text-lg sm:text-xl px-10 py-4 rounded-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
        >
          TICKETS SICHERN
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
