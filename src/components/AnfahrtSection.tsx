import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Car, Clock, X, Navigation } from "lucide-react";
import anfahrtKarte from "@/assets/anfahrt-karte.png";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/DEKRA+Lausitzring/@51.5245,13.9975,14z";

const parkingSpots = [
  {
    name: "Eventparkplatz (am Gelände)",
    free: false,
    fee: "kostenpflichtig",
    walk: "Laufweg: 2–5 Min.",
  },
  {
    name: "LKW Parkplatz Autohof Klettwitz",
    free: true,
    fee: "kostenlos",
    walk: "Laufweg: ca. 15 Min.",
  },
  {
    name: "Parkplatz Aussichtsturm",
    free: true,
    fee: "kostenlos",
    walk: "Laufweg: ca. 10 Min.",
  },
  {
    name: "Parkhaus (Senftenberger See)",
    free: false,
    fee: "gebührenpflichtig",
    walk: "Laufweg: ca. 20 Min.",
  },
  {
    name: "Waldparkplatz Schipkau",
    free: true,
    fee: "kostenlos",
    walk: "Laufweg: ca. 20 Min.",
  },
  {
    name: "Parkplatz Am See",
    free: true,
    fee: "kostenlos",
    walk: "Laufweg: ca. 25 Min.",
  },
];

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
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Anfahrt & <span className="text-primary">Parken</span>
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        {/* Two-column layout: Map + Parking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map + Address combined */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div
              onClick={() => setMapExpanded(true)}
              className="cursor-pointer card-rugged rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300 flex-1"
            >
              <img
                src={anfahrtKarte}
                alt="Anfahrtskarte zum DEKRA Lausitzring"
                className="w-full h-64 sm:h-80 lg:h-[320px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <p className="text-center text-muted-foreground text-sm py-2 font-body">
                Klicken zum Vergrößern
              </p>
            </div>

            {/* Address card below map */}
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
          </motion.div>

          {/* Parking overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              Parkplätze in der Nähe
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
              {parkingSpots.map((spot, i) => (
                <motion.div
                  key={spot.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-rugged rounded-lg p-3 sm:p-4 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                    <span className="font-body text-foreground font-medium text-xs sm:text-sm leading-tight">{spot.name}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-6 ml-5 sm:ml-0">
                    <span
                      className={`text-[10px] sm:text-sm font-body font-semibold px-1.5 sm:px-2 py-0.5 rounded whitespace-nowrap ${
                        spot.free
                          ? "bg-primary/15 text-primary"
                          : "bg-destructive/15 text-destructive"
                      }`}
                    >
                      {spot.fee}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-[10px] sm:text-sm font-body whitespace-nowrap">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {spot.walk}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-[10px] sm:text-xs mt-3 sm:mt-4 font-body leading-relaxed">
              * Gehzeiten sind Richtwerte vom jeweiligen Parkplatz zum Festivalgelände. Änderungen vorbehalten.
              Angaben zu Parkgebühren ohne Gewähr – Informationen basieren auf Google Maps und können abweichen.
            </p>
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
