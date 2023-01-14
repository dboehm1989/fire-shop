# Shop landigpage

Das Projekt zeigt, wie man Vue 3, Vite, Pinia, Bulma und TypeScript im Frontend verwendet.

## Gliederung

- [Ordnerstruktur](#ordnerstruktur)
- [Setup](#setup)
- [Start](#start)

## Ordnerstruktur

Struktur des Handbuch-Repository:

```shell
    .
    ├── public                   # Statisches Verzeichnis
    ├── src                      # Hauptordner zum entwickeln
    │   ├── assets               # Manuell verwaltete Bilder, Schriften
    │   ├── components           # Vue Komponente
    │   ├── interface            # Struktur von Objekten, die in der Anwendung verwendet werden
    │   ├── services             # API Schnittstellen
    │   ├── stores               # Zustände der Anwendung verwalten
    │   └── styles               # Styling Regeln der Anwendung
    │   :── App.vue              # Die Wurzel der Hauptkomponente
    │   :── auto-imports.d.ts    # Automatisch generierte imports aus der vite.config.ts
    │   :── main.ts              # Dient zum start der Anwendendung
    :── .eslintignore            # ESlint Regeln ignorieren
    :── .eslintrc.yml            # ESlint Regeln
    :── .gitignore               # Auflistung von Dateien, die Git ignorieren soll
    :── .prettierignore          # Prettier Regeln ignorieren
    :── .prettierrc              # Prettier Regeln
    :── index.html               # Einstieg
    :── package-lock.json        # Verwaltet Abhängigkeiten und Versionen von npm-Paketen
    :── package.json             # Grundlegenden Metadaten eines npm-Projekts
    :── tsconfig.json            # Typescript konfigurieren
    :── vite.config.ts           # Vite konfigurieren
```

## Setup

Empfehlung:

Installieren Sie die folgenden VSCode Plugins um das Entwickeln komfortabler zu gestalten.

Im `VS Code` in den Erweiterungen bitte `Vetur` deaktivieren und `Volar` aktivieren.

**VSCode Plugins:**

- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `stylelint.vscode-stylelint`
- `Vue.volar`
- `Vue.vscode-typescript-vue-plugin`

Beim Implementieren des Projekts wurde folgende Umgebung genutzt:

- [x] nvm version 1.1.10
- [x] npm version 9.2.0
- [x] node version 18.13.0

## Start

**Abhängigkeiten des Projekts installieren:**

```shell
npm install
```

**Entwicklungsmodus**

```shell
npm run dev
```

**Build-Prozess für die Produktion**

```shell
npm run build
```

**Produktionsmodus:**

1. Build-Prozess ausführen.

2. Voarschau starten.

```shell
npm run preview
```
