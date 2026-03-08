import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2026-08-08T10:00:00").getTime();

  const calcTimeLeft = (): TimeLeft => {
    const diff = targetDate - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Tage", value: timeLeft.days },
    { label: "Stunden", value: timeLeft.hours },
    { label: "Minuten", value: timeLeft.minutes },
    { label: "Sekunden", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <motion.div
            key={unit.value}
            initial={{ scale: 1.1, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="card-rugged w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg"
          >
            <span className="font-display text-2xl sm:text-4xl font-bold text-primary">
              {String(unit.value).padStart(2, "0")}
            </span>
          </motion.div>
          <span className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-body">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
