const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg tracking-wider text-muted-foreground">
          TRUCK & COUNTRY FESTIVAL 2026
        </div>
        <div className="flex gap-6 text-sm font-body text-muted-foreground">
          <a href="https://dekra-lausitzring.de/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Impressum
          </a>
          <a href="https://dekra-lausitzring.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Datenschutz
          </a>
        </div>
        <div className="text-sm text-muted-foreground font-body">
          DEKRA Lausitzring
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
