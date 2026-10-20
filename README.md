# Inka Declerck — portfolio website

Een statische website met HTML, CSS en JavaScript, klaar om op GitHub Pages te publiceren.

## Mappenstructuur

```text
inka-portfolio/
├── index.html
├── permanente-vorming.html
├── over-mij.html
├── contact.html
├── activiteiten/
│   ├── activiteit-01.html
│   ├── ...
│   └── activiteit-11.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        ├── profielfoto.svg
        ├── home-intro.svg
        ├── activiteiten-banner.svg
        ├── over-mij-portret.svg
        ├── over-mij-detail.svg
        └── activiteit-placeholder.svg
```

## Foto's vervangen

De SVG's in `assets/images/` zijn tijdelijke afbeeldingsplaceholders, zodat de website meteen een verzorgde layout heeft. Vervang ze door eigen foto's, bij voorkeur in JPG of WebP. Pas dan het overeenkomstige `src`-pad in de HTML aan, bijvoorbeeld:

```html
<img src="assets/images/inka-portret.jpg" alt="Portret van Inka Declerck">
```

Op pagina's in de map `activiteiten/` begint het pad met `../assets/images/`.

## Kleuren en lettertypes aanpassen

Open `assets/css/style.css`. Bovenaan staan de belangrijkste kleurvariabelen (`--ink`, `--sand`, `--sand-light`, `--paper`) en lettertypes. De titels gebruiken Playfair Display; de gewone tekst gebruikt DM Sans. De Google Fonts worden online geladen.

## Lokaal bekijken

Open `index.html` in je browser. Voor lokaal ontwikkelen kun je ook de extensie Live Server in Visual Studio Code gebruiken.

## Publiceren op GitHub Pages

1. Maak op GitHub een nieuwe repository, bijvoorbeeld `inka-portfolio`.
2. Upload alle bestanden en mappen uit deze map naar de hoofdmap van de repository.
3. Open **Settings → Pages**.
4. Kies bij **Build and deployment** de optie **Deploy from a branch**.
5. Selecteer de branch `main` en de map `/ (root)`, en klik op **Save**.
6. Wacht tot GitHub de website publiceert. De URL verschijnt op de Pages-pagina.

## Contactformulier

Het formulier is momenteel een eenvoudige demo die een e-mailprogramma probeert te openen via `mailto:`. Voor een echt online formulier zonder e-mailprogramma moet je later een formulierdienst of backend koppelen.


## Activiteitenpagina's en foto's

Er is een aparte pagina voor elk van de 11 activiteiten in `activiteiten/`. De fotomappen staan in `assets/images/activiteit1/` tot en met `assets/images/activiteit11/`. De huidige SVG-bestanden zijn tijdelijke placeholders, geen echte foto's. Vervang ze door je foto's en pas de afbeeldingspaden in de bijhorende HTML aan. Zodra de originele screenshots/foto's zijn aangeleverd, kan het aantal foto's per galerij exact worden ingesteld.
