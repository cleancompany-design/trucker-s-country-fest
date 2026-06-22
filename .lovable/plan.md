## Was geändert wird

### 1. Sponsoren-Banner: R.SA als Kooperationspartner
- Im Banner (`SponsorBanner.tsx`) wird neben der bestehenden Hedin/Mercedes-Box rechts eine **zweite weiße Box im exakt gleichen Framing** (gleiche Padding, Rundung, Logo-Höhe) eingefügt.
- Darunter steht **„Kooperationspartner"** in identischer Typografie wie „Platin-Partner" (gleiche Letter-Spacing, Größe, Platinum-Farbton).
- Layout wird auf ein **2-spaltiges Raster** umgestellt: jede Box bekommt darüber den Banner-Titel „Unsere Sponsoren" weiterhin gemeinsam, darunter pro Logo das jeweilige Label („Platin-Partner" / „Kooperationspartner"). Mobil stapeln die zwei Logo-Spalten vertikal.

### 2. Wochenendticket mit Gruppenanmeldung
- In `InfoSection.tsx` (Tickets-Bereich) wird beim Ticket „Wochenendticket mit Gruppenanmeldung" die **Verlinkung zum DEKRA-Shop entfernt**.
- Das **Google-Formular** (`https://forms.gle/KRgPkr4t2JJNHXUT7`) bleibt die einzige/primäre Aktion der Karte.
- Preis und übrige Karteninhalte bleiben unverändert.

## Offene Frage — R.SA-Logo

Du hast gesagt, du brauchst eine **bestimmte** R.SA-Variante. Damit ich die richtige besorge, brauche ich noch eine Info:

- Welche Variante? z. B. das klassische rote „R.SA"-Logo, „R.SA – von Sachsen für Sachsen", oder eine Sondervariante (Truck/Country-Festival-Edition)?
- Ideal wäre ein **direkter Link zur Bilddatei** (PNG/SVG) – z. B. aus dem R.SA-Pressebereich oder einer Webseite, auf der das gewünschte Logo eingebunden ist. Dann lade ich es serverseitig herunter und binde es ein.
- Alternativ: Sobald dein Bild-Upload wieder funktioniert, kannst du es einfach in den Chat ziehen.

Sobald die Quelle klar ist, ziehe ich das Logo, lege es unter `src/assets/rsa-logo.png` ab und baue die Banner-Erweiterung wie oben beschrieben.

## Technische Details

- `SponsorBanner.tsx`: Grid `grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10`, beide Boxen mit identischer Klasse `bg-white rounded-lg px-8 py-4 sm:px-12 sm:py-5` und Logo-Höhe `h-12 sm:h-16 lg:h-20`. Pro Spalte: weiße Box + Label darunter.
- `InfoSection.tsx`: Im Ticket-Array für „Wochenendticket mit Gruppenanmeldung" wird das `shopUrl`-Feld geleert/entfernt, sodass nur noch der Formular-Link gerendert wird. Falls eine generische „Tickets kaufen"-Schaltfläche an die Shop-URL gebunden ist, wird sie für diese Karte ausgeblendet oder durch den Formular-Button ersetzt.
