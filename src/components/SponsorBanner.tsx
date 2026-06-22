import hedinLogo from "@/assets/hedin-automotive.png";
import rsaLogo from "@/assets/rsa-logo.svg";

const sponsors = [
  {
    src: hedinLogo,
    alt: "Hedin Automotive – Mercedes-Benz",
    label: "Platin-Partner",
  },
  {
    src: rsaLogo,
    alt: "R.SA – Radio Sachsen",
    label: "Kooperationspartner",
  },
];

const SponsorBanner = () => {
  return (
    <section className="bg-primary py-8 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <h3 className="font-display text-sm sm:text-base tracking-[0.3em] text-primary-foreground/80 uppercase">
          Unsere Sponsoren
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full items-end justify-items-center">
          {sponsors.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div className="bg-white rounded-lg px-8 py-4 sm:px-12 sm:py-5 flex items-center justify-center h-20 sm:h-24 lg:h-28">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="h-12 sm:h-16 lg:h-20 object-contain"
                />
              </div>
              <span
                className="font-display text-xs sm:text-sm tracking-[0.25em] uppercase"
                style={{ color: "#E5E4E2" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
