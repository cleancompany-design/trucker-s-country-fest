## Neue Sektion „Programm"

Ich lege eine neue Komponente `src/components/ProgrammSection.tsx` an, die zwischen **Line-Up** und **Anfahrt** einsortiert wird. Sie enthält den kompletten Tagesablauf aus dem Poster – textbasiert, im Stil der Seite, ohne das Poster selbst einzubetten.

### Aufbau

- **Section-Header** wie überall auf der Seite:
  - Icon (`CalendarClock` aus `lucide-react`) neben dem Titel „Pro**gramm**" (Akzent auf „gramm" in DEKRA-Grün, analog „Line-**Up**")
  - Kurzer Untertitel: „Der komplette Tagesablauf – 07. bis 09. August 2026."
  - `section-divider` darunter (wie bei Lineup)
- **Icon-Leiste oben** (wie im Poster: Truck Trial EM · 1/4 Meile Rennen · Speedcarving · Konzerte & Festivalpartys · Line Dance & Shows) – 5 kleine Icon-Chips als visuelle Verklammerung mit dem Flyer, in Grün/Weiß, `flex flex-wrap justify-center gap-6`.
- **3-Spalten-Grid** (`grid grid-cols-1 xl:grid-cols-3 gap-6`) analog zum LineupSection-Layout, damit Programm und Line-Up visuell zusammengehören:
  - Karte pro Tag, `card-rugged rounded-lg`
  - Kopf: `bg-primary/10 border-b`, Calendar-Icon + „Freitag / Samstag / Sonntag" links, Datum rechts (`07.08.2026` etc.)
  - Body: Zeitraster als schmale zweispaltige Liste
    - links Uhrzeit (`font-body text-primary text-sm font-semibold`, feste Breite)
    - rechts Programmpunkt (`font-body text-sm text-foreground/90`)
    - Trennung durch `divide-y divide-border`
- Musik-Konzerte (Cashbags, Alina Sebastian, Truck Stop, Linda Feller, Jonny Hill) werden im Programm **erwähnt**, aber ohne Doppelinhalt – nur Zeile „Konzert Linda Feller (Hauptbühne)"; die Bio-Details bleiben ausschließlich im Line-Up.

### Inhalte (aus dem Poster übernommen)

**Freitag – 07.08.2026**
- ab 15:00 Uhr – Anreise der Trucks & Camper
- 17:00 Uhr – Eröffnung Festivalgelände durch Tibor Eggestein
- 20:00 Uhr – Konzert The Cashbags
- ab 22:00 Uhr – Festivalparty mit DJ Henri

**Samstag – 08.08.2026**
- 10:00 – Eröffnung Festivalgelände durch Tibor Eggestein
- ab 10:00 – Beginn / 1. Tag Truck Trial EM
- ab 10:30 – Wettkampf „Stärkste Spedition"
- 10:30 – Line Dance Vorführung (Hauptbühne)
- 11:00 – Line Dance Kurs (Hauptbühne)
- 11:30 – Speedcarving / Die Weltmeister im Kettensägenschnitzen
- 12:30 – Falknershow
- 13:30 – Monstertruckshow
- 14:00 – 1/4 Meile
- 14:00 – Line Dance Vorführung (Hauptbühne)
- 14:30 – Line Dance Kurs (Hauptbühne)
- 15:00 – Falknershow
- 16:00 – Monstertruckshow
- 16:30 – Speedcarving / Kettensägenschnitzen
- 17:00 – Korso
- 19:00 – Konzert Alina Sebastian (Hauptbühne)
- 20:30 – Konzert Truck Stop (Hauptbühne)
- ab 22:00 – Festivalparty mit DJ Henri

**Sonntag – 09.08.2026**
- 10:00 – Eröffnung Festivalgelände durch Tibor Eggestein
- ab 10:00 – 2. Tag Truck Trial EM
- 10:30 – 1/4 Meile
- 10:30 – Speedcarving / Kettensägenschnitzen
- 12:00 – Line Dance Vorführung (Hauptbühne)
- 12:30 – Line Dance Kurs (Hauptbühne)
- 13:00 – Falknershow
- 13:30 – Konzert Linda Feller (Hauptbühne)
- 14:30 – Konzert Jonny Hill (Hauptbühne)
- 15:30 – Falknershow
- 16:00 – Line Dance Vorführung (Hauptbühne)
- 16:30 – Speedcarving / Kettensägenschnitzen
- 17:00 – Siegerehrung Wettkämpfe / Show & Shine / 1/4 Meile Rennen
- 20:00 – Siegerehrung Truck Trial

Kleiner Disclaimer-Satz unter dem Grid: „Programmänderungen vorbehalten." (`text-xs text-muted-foreground text-center`).

## Navbar-Integration

In `src/components/Navbar.tsx` wird ein neuer Link **„Programm"** zwischen **„Line-Up"** und **„Anfahrt"** eingefügt (Anker `#programm`). Die bestehende Logik für In-Page-Anker greift automatisch. Mobil erscheint der Punkt an derselben Position.

## Einbindung

In `src/pages/Index.tsx` wird `<ProgrammSection />` zwischen `<LineupSection />` und `<AnfahrtSection />` platziert. Section-ID `programm` mit `scroll-mt-16` (Navbar-Offset), analog zu Lineup.

## Technische Details

- Neue Datei: `src/components/ProgrammSection.tsx`
- Daten als `const days = [{ day, date, items: [{ time, text, highlight? }] }]`. `highlight: true` (Konzerte, Siegerehrungen, Eröffnung) rendert die Zeile mit `font-semibold text-foreground` statt normal.
- Icon-Chips-Daten inline als Array mit lucide-Icons: `Truck`, `Gauge`, `TreePine` (Speedcarving), `Music`, `HatGlasses`/`Users` (Line Dance). Falls kein passendes Icon existiert, `Music`/`Sparkles` als Fallback.
- Keine neuen Assets, keine Bilder, keine externen Fonts – rein tokenbasiert (`text-primary`, `card-rugged`, `border-border`, `bg-primary/10`).
- Navbar: `navLinks`-Array um `{ label: "Programm", href: "#programm" }` an Index 2 erweitern.
