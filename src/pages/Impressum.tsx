import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline font-body mb-8">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">Impressum</h1>

          <div className="prose prose-invert max-w-none font-body space-y-6 text-foreground">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                OVWA GmbH<br />
                Paul-Neck-Str. 40<br />
                02625 Bautzen
              </p>
              <p>
                Handelsregister: HRB 33930<br />
                Registergericht: Dresden
              </p>
              <p>Vertreten durch: Hagen Alex</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">Kontakt</h2>
              <p>
                Telefon: +49 3591 6788 745<br />
                E-Mail: info@ovwa.de
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE357644349
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Impressum;
