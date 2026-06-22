import hedinLogo from "@/assets/hedin-automotive.png";
import rsaLogo from "@/assets/rsa-logo-cropped.png";

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
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h3 className="font-display text-sm sm:text-base tracking-[0.3em] text-primary-foreground/80 uppercase">
          Unsere Sponsoren
        </h3>
        <div className="flex flex-row flex-wrap items-end justify-center gap-x-8 gap-y-6 sm:gap-x-12 w-full">
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
