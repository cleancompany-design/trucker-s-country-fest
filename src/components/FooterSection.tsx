const Divider = () => (
  <span className="hidden sm:block w-px h-4 bg-primary/60" />
);

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-sm font-body text-muted-foreground flex-wrap">
          <span className="font-display text-base tracking-wider">TRUCK & COUNTRY FESTIVAL 2026</span>
          <Divider />
          <a href="https://dekra-lausitzring.de/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors sm:px-4">
            Impressum
          </a>
          <Divider />
          <a href="https://dekra-lausitzring.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors sm:px-4">
            Datenschutz
          </a>
          <Divider />
          <span className="sm:px-4">DEKRA Lausitzring</span>
          <Divider />
          <span className="sm:px-4">© DEKRA Lausitzring</span>
        </div>

        {/* Trademark notice */}
        <p className="text-center text-xs text-muted-foreground/60 font-body mt-4">
          Der DEKRA Lausitzring ist eine eingetragene Marke der DEKRA Automobil GmbH
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
