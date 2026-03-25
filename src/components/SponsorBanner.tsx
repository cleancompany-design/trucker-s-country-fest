import hedinLogo from "@/assets/hedin-automotive.png";

const SponsorBanner = () => {
  return (
    <section className="bg-primary py-8 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h3 className="font-display text-sm sm:text-base tracking-[0.3em] text-primary-foreground/80 uppercase">
          Unsere Sponsoren
        </h3>
        <div className="bg-white rounded-lg px-8 py-4 sm:px-12 sm:py-5">
          <img
            src={hedinLogo}
            alt="Hedin Automotive – Mercedes-Benz"
            className="h-12 sm:h-16 lg:h-20 object-contain"
          />
        </div>
        <span
          className="font-display text-xs sm:text-sm tracking-[0.25em] uppercase"
          style={{ color: "#E5E4E2" }}
        >
          Platin-Partner
        </span>
      </div>
    </section>
  );
};

export default SponsorBanner;
