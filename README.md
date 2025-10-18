# Promille Rechner – Stunden-Übersicht (Bier/Radler)

Ein schlanker Promille-Rechner für die Eingabe **pro Stunde** (Bier & Radler in 0,3/0,4/0,5 L). 
Berechnet Promille nach **Widmark** (r: m 0,68 / w 0,55) mit **linearem Abbau** (standard 0,12 ‰/h).

## Features
- Stunden-Slots von Startzeit bis jetzt, werden automatisch ergänzt
- Per Klick je Stunde Bier/Radler hinzufügen
- Live-Promille, Warnung ab 0,5 ‰, ETA für < 0,5 ‰ und 0,0 ‰
- Lokale Zeit (kein UTC-Drift), Persistenz via `localStorage`
- PWA: funktioniert auch offline (Service Worker)

## Installation
1. Dieses Repository als GitHub-Repo anlegen und die Dateien hochladen.
2. **GitHub Pages** aktivieren (Settings → Pages → Deploy from Branch → Branch: `main`).
3. Die App ist anschließend unter `https://<user>.github.io/<repo>/` erreichbar.

## Lokal testen
Einfach `index.html` im Browser öffnen. Für PWA/ServiceWorker am besten über einen lokalen Server starten, z. B.:
```bash
python3 -m http.server 8080
# dann http://localhost:8080
```

## Lizenz
MIT
