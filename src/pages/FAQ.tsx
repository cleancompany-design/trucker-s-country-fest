import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Tickets & Einlass",
    items: [
      {
        question: "Kann ich mein Ticket weitergeben, wenn ich nicht kommen kann?",
        answer: "Ja, Tickets können an andere Personen weitergegeben werden. Eine Erstattung ist nicht möglich.",
      },
      {
        question: "Reicht das digitale Ticket auf dem Handy?",
        answer: "Ja, das digitale Ticket wird am Einlass akzeptiert.",
      },
      {
        question: "Gibt es Ermäßigungen oder spezielle Ticketkategorien?",
        answer: "Kinder und Jugendliche bis einschließlich 16 Jahre erhalten kostenfreien Eintritt zum Truck & Country Festival. Ausgenommen sind die Konzerte am Freitag- und Samstagabend. Weitere Infos sind im Ticketshop ersichtlich. Personen mit Behindertenausweis B benötigen ein normales Ticket, ihre Begleitperson hat kostenfreien Zutritt zur Veranstaltung.",
      },
      {
        question: "Kann ich das Gelände verlassen und später wiederkommen?",
        answer: "Ja, mit gültigem Festivalbändchen ist ein Wiedereinlass möglich.",
      },
    ],
  },
  {
    title: "Öffnungszeiten",
    items: [
      {
        question: "Wann öffnet das Festivalgelände?",
        answer: (
          <>
            <p className="mb-3">Das Festivalgelände öffnet für Trucker am Freitag 17:00 Uhr und schließt am Sonntag um 22:00 Uhr. Camper können Freitag ab 17:00 Uhr bis Sonntag 20:00 Uhr auf dem Gelände verweilen.</p>
            <p>Zuschauer können am Freitag das Konzert besuchen, Einlass ist ab 19:00 Uhr, Konzertbeginn 20:00 Uhr. Am Samstag können Besucher mit einem Tagesticket von 10:00 Uhr bis 18:00 Uhr dabei sein. Ab 18:00 Uhr ist Einlass für das Konzert, welches 19:00 Uhr beginnt. Hierfür sind gesonderte Tickets notwendig. Sonntags ist das Gelände von 10:00 Uhr bis 18:00 Uhr geöffnet.</p>
          </>
        ),
      },
    ],
  },
  {
    title: "Konzerte",
    items: [
      {
        question: "Gibt es Konzerte?",
        answer: "Ja, am Freitag- und Samstagabend sowie Sonntagnachmittag finden Konzerte mit Live-Acts statt.",
      },
      {
        question: "Brauche ich für die Abendkonzerte ein separates Ticket?",
        answer: (
          <>
            <p className="mb-3">Ja. Freitagabend findet das Konzert der Band The Cashbags statt. Für diesen Konzertabend ist ein separates Zusatzticket erforderlich. Am Samstagabend stehen Alina Sebastian und Truck Stop auf der Bühne.</p>
            <p className="mb-3">Das Fahrerticket beinhaltet den Konzertabend am Samstag. Beifahrer benötigen hierfür ein separates Ticket.</p>
            <p>Am Sonntagnachmittag sorgen Linda Feller und Jonny Hill für den musikalischen Ausklang des Festivalwochenendes. Diese Konzerte sind für alle im Tages- oder Wochenendticket enthalten.</p>
          </>
        ),
      },
      {
        question: "Wann beginnt der Einlass zu den Abendkonzerten?",
        answer: "Einlass für das Konzert am Freitag ist ab 19:00 Uhr, Konzertbeginn 20:00 Uhr. Am Samstag ist ab 18:00 Uhr Einlass für das Konzert, welches 19:00 Uhr beginnt.",
      },
    ],
  },
  {
    title: "Ablauf & Gelände",
    items: [
      {
        question: "Gibt es eine Geländeübersicht?",
        answer: "Ja, eine Karte wird vor dem Festival online veröffentlicht.",
      },
      {
        question: "Gibt es überdachte Bereiche?",
        answer: "Einige Bereiche wie Gastronomie- und Händlerzonen bieten wettergeschützte Plätze.",
      },
      {
        question: "Gibt es Ruhezeiten?",
        answer: "Für Campingbereiche gelten gesonderte Ruhezeiten, die vorab bekanntgegeben werden.",
      },
    ],
  },
  {
    title: "Trucks & Teilnahme & Anmeldung",
    items: [
      {
        question: "Wie kann ich mich als Trucker anmelden?",
        answer: (
          <>
            <p className="mb-3">Die Tickets für die Einzelanmeldung sind im Ticketshop erhältlich. Wenn Sie nicht allein anreisen möchten, sondern als geschlossene Truck-Community, kann das Formular zur Gruppenanmeldung genutzt werden.</p>
            <p>Bitte geben Sie bei der Anmeldung die Fahrzeugklasse an. Wählen Sie die passende Kategorie und tragen Sie diese im Anmeldeformular während des Checkout-Prozesses ein. Eine Übersicht aller Fahrzeugklassen finden Sie{" "}
              <a href="https://dekra-lausitzring.de/wp-content/uploads/2026/03/Klasseneinteilung-Truck-und-Country-Festival-5.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hier</a>.
            </p>
          </>
        ),
      },
      {
        question: "Welche Add-ons gibt es?",
        answer: (
          <>
            <p className="mb-3">Im Shop bzw. über die Gruppenanmeldung können direkt verschiedene Bausteine hinzugebucht werden:</p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Show and Shine Contest:</strong> Kostenfreie Teilnahme – hier ist die Auswahl der passenden Fahrzeugklasse besonders wichtig. Bewertet wird durch eine fachmännische Jury. Die Siegerehrung findet am Sonntagnachmittag statt.</li>
              <li><strong className="text-foreground">Truck-Korso:</strong> Einmaliges Erlebnis mit dem eigenen Fahrzeug auf der 11,3 km langen Langstrecke bestehend aus Hochgeschwindigkeitsoval inkl. zwei Steilkurven und der Grand Prix Strecke des DEKRA Lausitzrings. Die konkreten Fahrzeiten werden im Vorfeld bekannt gegeben. Gefahren werden zwei bis drei Runden. Nur für Fahrzeuge mit Straßenzulassung und Kennzeichen – Achtung kein Versicherungsschutz!</li>
              <li><strong className="text-foreground">¼ Meile:</strong> Auf der klassischen Distanz von 402 Metern treten Trucks im direkten Beschleunigungsvergleich gegeneinander an. Hier geht es nicht um Show, sondern um Kraft, Technik und präzise Kontrolle. Jeder Start zählt, jede Zehntelsekunde macht den Unterschied. Auch hier gilt nur für Fahrzeuge mit Straßenzulassung und Nummernschild, keine Rennen – jedes Fahrzeug startet einzeln. Die konkreten Zeiten werden im Zeitplan bekanntgegeben.</li>
              <li><strong className="text-foreground">Frühstück:</strong> Zubuchbar für Camper und Trucker im Paket für Samstag und Sonntag. Das Frühstück findet direkt auf dem Festivalgelände statt und bietet Ihnen einen komfortablen Auftakt in einen erlebnisreichen Tag.</li>
            </ul>
            <p className="mt-3">Alle Add-ons können auch nachträglich gebucht werden, sofern ein gültiges Wochenendticket inklusive Truck-Anmeldung vorliegt.</p>
          </>
        ),
      },
      {
        question: "Muss mein Truck besondere Voraussetzungen erfüllen?",
        answer: (
          <p>Es gibt eine Klasseneinteilung, die unter folgendem{" "}
            <a href="https://dekra-lausitzring.de/wp-content/uploads/2026/03/Klasseneinteilung-Truck-und-Country-Festival-5.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link</a>{" "}
            eingesehen werden kann.
          </p>
        ),
      },
      {
        question: "Kann ich auch ohne Showtruck teilnehmen?",
        answer: "Natürlich – das Festival ist für alle Besucher geöffnet.",
      },
    ],
  },
  {
    title: "Übernachtungsmöglichkeiten",
    items: [
      {
        question: "Welche Übernachtungsmöglichkeiten gibt es rund um den Lausitzring?",
        answer: "In der Umgebung gibt es Hotels, Pensionen, Ferienwohnungen sowie Campingplätze. Die nächstgelegenen Unterkünfte befinden sich in Schwarzheide, Senftenberg, Großräschen und Schipkau.",
      },
      {
        question: "Wie weit sind die Hotels vom Lausitzring entfernt?",
        answer: "Viele Unterkünfte liegen zwischen 1,5 km und 10 km vom Lausitzring entfernt – ideal für Festivalbesucher.",
      },
      {
        question: "Gibt es Unterkünfte, die fußläufig erreichbar sind?",
        answer: "Direkt fußläufig gibt es nur wenige Optionen, aber mehrere Hotels liegen in 1,5–10 km Entfernung, also sehr nah.",
      },
      {
        question: "Was gilt für die Trucker?",
        answer: "Die Übernachtung im eigenen Truck auf dem Festivalgelände ist sowohl bei der Einzel- als auch bei der Gruppenanmeldung im Ticketpreis enthalten.",
      },
    ],
  },
  {
    title: "Camping",
    items: [
      {
        question: "Wann kann ich auf den Campingplatz fahren?",
        answer: "Anreise ist am Freitag, den 7. August ab 17:00 Uhr möglich und die Abreise muss am Sonntag, den 9. August bis spätestens 20:00 Uhr erfolgen.",
      },
      {
        question: "Gibt es Stromanschlüsse?",
        answer: "Auf dem Campingplatz sind keine Stromplätze verfügbar.",
      },
      {
        question: "Sind Duschen und Toiletten vorhanden?",
        answer: "Duschen und WC befinden sich in der Haupttribüne des DEKRA Lausitzrings und können von allen Campern genutzt werden.",
      },
      {
        question: "Darf ich einen Pavillon oder Grill mitbringen?",
        answer: "Pavillons, kleine Grills und Gaskocher sind erlaubt. Offenes Feuer (Lagerfeuer) ist nicht erlaubt. Es ist die geltende Waldbrandwarnstufe zu beachten.",
      },
    ],
  },
  {
    title: "Parken & Anreise",
    items: [
      {
        question: "Wie weit sind die Parkplätze vom Eingang entfernt?",
        answer: "Die Besucherparkplätze befinden sich in unmittelbarer Nähe zum Gelände.",
      },
      {
        question: "Kann ich mein Auto über Nacht stehen lassen?",
        answer: "Ja, das ist möglich.",
      },
    ],
  },
  {
    title: "Tiere",
    items: [
      {
        question: "Sind Hunde erlaubt?",
        answer: "Ja, Hunde sind erlaubt, müssen aber jederzeit angeleint sein.",
      },
      {
        question: "Gibt es Bereiche, in die Hunde nicht dürfen?",
        answer: "In ausgewiesenen Bereichen (z. B. Bühnenfront) können Einschränkungen gelten.",
      },
    ],
  },
  {
    title: "Sicherheit & Regeln",
    items: [
      {
        question: "Welche Gegenstände sind verboten?",
        answer: "Das Mitbringen gefährlicher Gegenstände ist untersagt. Dies gilt insbesondere für Waffen, pyrotechnische Erzeugnisse sowie Glasbehältnisse wie Glasflaschen.",
      },
      {
        question: "Gibt es Taschenkontrollen?",
        answer: "Ja, am Einlass finden Sicherheitskontrollen statt.",
      },
      {
        question: "Gibt es medizinische Versorgung vor Ort?",
        answer: "Sanitäter und Sicherheitskräfte sind während des gesamten Festivals im Einsatz.",
      },
      {
        question: "Was mache ich, wenn ich etwas verloren habe?",
        answer: "Fundsachen können am zentralen DEKRA-Infostand abgegeben oder abgeholt werden.",
      },
    ],
  },
  {
    title: "Bezahlmöglichkeiten",
    items: [
      {
        question: "Kann ich überall mit Karte zahlen?",
        answer: "Viele Stände akzeptieren Kartenzahlung, dennoch empfiehlt sich Bargeld.",
      },
      {
        question: "Gibt es Geldautomaten?",
        answer: "Nein. Es gibt einen Geldautomaten der Sparkasse Niederlausitz, Schillerstraße 47, 01993 Schipkau, 2,4 km vom Lausitzring entfernt.",
      },
    ],
  },
  {
    title: "Food Area",
    items: [
      {
        question: "Gibt es vegetarische oder vegane Optionen?",
        answer: "Ja, es werden entsprechende Speisen angeboten.",
      },
      {
        question: "Darf ich eigenes Essen oder Getränke mitbringen?",
        answer: "Das Mitbringen von Getränken ist bis max. 1 Liter pro Person in einer wiederverschließbaren PET-Flasche erlaubt.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline font-body mb-8">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-8">FAQ</h1>

          <div className="space-y-8">
            {faqData.map((category, catIdx) => (
              <section key={catIdx}>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">{category.title}</h2>
                <Accordion type="single" collapsible className="border border-border rounded-lg overflow-hidden">
                  {category.items.map((item, itemIdx) => (
                    <AccordionItem key={itemIdx} value={`${catIdx}-${itemIdx}`} className="border-border last:border-b-0">
                      <AccordionTrigger className="px-5 py-4 font-body text-left text-foreground hover:no-underline hover:bg-muted/50 transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 font-body text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default FAQ;
