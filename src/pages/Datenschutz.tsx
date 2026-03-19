import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline font-body mb-8">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-invert max-w-none font-body space-y-8 text-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
              <p>Diese Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
              <p>
                OVWA GmbH<br />
                Vor dem Schülertor 1a<br />
                02625 Bautzen<br />
                Telefon: +49 3591 6788 745<br />
                E-Mail: info@ovwa.de
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">3. Dienstleister für Webseitenerstellung</h2>
              <p>
                Die technische Umsetzung und Betreuung der Website erfolgt durch:<br />
                CleanCompany Operations<br />
                Eric Fürtl<br />
                Kolonnenstraße 8<br />
                10827 Berlin
              </p>
              <p>CleanCompany Operations ist nicht Hosting-Provider, sondern technischer Dienstleister.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">4. Hosting</h2>
              <p>
                Unsere Website wird gehostet bei:<br />
                Edmund-von-Lippmann-Straße 13-15<br />
                06112 Halle (Saale) Deutschland<br />
                Ust.ID: DE249338561
              </p>
              <p>
                Geschäftsführer: Daniel Hagemeier, Florian Kopshoff<br />
                Kunden E-Mail: support@alfahosting.de<br />
                Datenschutzhinweise:{" "}
                <a href="https://alfahosting.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://alfahosting.de/datenschutz/
                </a>
              </p>
              <p>Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Ein AVV wurde abgeschlossen.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">5. Allgemeine Hinweise zur Datenverarbeitung</h2>
              <p>Wir verarbeiten personenbezogene Daten gemäß DSGVO und TTDSG.</p>
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">Rechtsgrundlagen:</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO – Vertrag / vorvertragliche Maßnahmen</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO – rechtliche Verpflichtung</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">6. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Auskunft</li>
                <li>Berichtigung</li>
                <li>Löschung</li>
                <li>Einschränkung</li>
                <li>Widerspruch</li>
                <li>Datenübertragbarkeit</li>
                <li>Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">7. SSL-/TLS-Verschlüsselung</h2>
              <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">8. Datenerfassung auf dieser Website</h2>
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">Cookies</h3>
              <p>Wir verwenden Cookies, die für den technischen Betrieb notwendig sind. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">Server-Log-Dateien</h3>
              <p>Der Hosting-Provider erhebt automatisch:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Browsertyp und Version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname</li>
                <li>Uhrzeit</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
              <h3 className="font-display text-lg font-semibold mt-4 mb-2">Kontaktaufnahme</h3>
              <p>Bei Kontakt per E-Mail oder Telefon speichern wir Ihre Angaben zur Bearbeitung der Anfrage.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">9. Eingebettete Inhalte</h2>
              <p>Unsere Website kann Inhalte von Drittanbietern einbetten. Diese werden erst geladen, wenn Sie aktiv zustimmen.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">10. Social-Media-Verlinkungen</h2>
              <p>Unsere Website enthält Links zu unseren Social-Media-Profilen. Beim bloßen Besuch werden keine Daten übertragen.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">11. Externe Links (z. B. Ticketshop)</h2>
              <p>Unsere Website enthält Links zu externen Angeboten. Für die Datenverarbeitung auf diesen Seiten ist der jeweilige Betreiber verantwortlich.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">12. Ticketshop</h2>
              <p>Der Ticketverkauf erfolgt über einen externen Anbieter. Bitte beachten Sie dessen Datenschutzerklärung.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">13. Widerspruch gegen Werbe-E-Mails</h2>
              <p>Der Nutzung unserer Kontaktdaten für nicht ausdrücklich angeforderte Werbung wird widersprochen.</p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">© 2026 OVWA GmbH</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Datenschutz;
