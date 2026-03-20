import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Car, X, Navigation } from "lucide-react";
import anfahrtKarte from "@/assets/anfahrt-karte.png";

const AnfahrtSection = () => {
  const [mapExpanded, setMapExpanded] = useState(false);

  return (
    <section id="anfahrt" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="flex items-center justify-center gap-2 sm:gap-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <Car className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0" />
            <span>
              Anfahrt & <span className="text-primary">Parken</span>
            </span>
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div
              onClick={() => setMapExpanded(true)}
              className="cursor-pointer card-rugged rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <img
                src={anfahrtKarte}
                alt="Anfahrtskarte zum DEKRA Lausitzring"
                className="w-full h-64 sm:h-80 lg:h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <p className="text-center text-muted-foreground text-sm py-2 font-body">
                Klicken zum Vergrößern
              </p>
            </div>

            {/* Address + Parking info */}
            <div className="card-rugged rounded-lg p-5 mt-4 flex items-center gap-4">
              <div className="bg-primary/15 rounded-full p-3 shrink-0">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-display text-lg tracking-wide">DEKRA Lausitzring</span>
                </div>
                <p className="text-muted-foreground font-body text-sm">Lausitzallee 1, 01998 Schipkau</p>
              </div>
            </div>

            <div className="card-rugged rounded-lg p-5 mt-3 flex items-center gap-4">
              <div className="bg-primary/15 rounded-full p-3 shrink-0">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="font-display text-lg tracking-wide">Parken direkt am Gelände</span>
                <p className="text-muted-foreground font-body text-sm mt-0.5">
                  Parkplätze stehen direkt auf dem DEKRA Lausitzring zur Verfügung.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expanded map overlay */}
        <AnimatePresence>
          {mapExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 cursor-pointer"
              onClick={() => setMapExpanded(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-[95vw] max-h-[90vh]"
              >
                <button
                  onClick={() => setMapExpanded(false)}
                  className="absolute -top-4 -right-4 z-10 bg-primary text-primary-foreground rounded-full p-2 hover:brightness-110 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={anfahrtKarte}
                  alt="Anfahrtskarte zum DEKRA Lausitzring"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
                <p className="text-center text-muted-foreground text-sm mt-2 font-body">
                  Klicken zum Schließen
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnfahrtSection;
