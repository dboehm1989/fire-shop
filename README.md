# The Brand shop landigpage

## Gliederung

- [Ordnerstruktur](#ordnerstruktur)
- [Update](#update)
- [Start](#start)
- [SASS/SCSS](#SASS/SCSS)

## Ordnerstruktur

Struktur des Handbuch-Repository:

```shell
    .
    ├── backend                  # Backend
    │   ├── test.http            # Api calls zum testen des Backends
    ├── frontend                 # Frontend
    │   ├── assets               # Manuell verwaltete Bilder, Schriften, JS, CSS
    │   ├── components           # Vue Komponente
    │   ├── libs                 # Bibliotheken (über update.cmd aktualisiert)
    │   ├── utils                # Plugins
    │   ├── pages                # Hauptkomponenten
    │   └── index.html           # Einstieg
    ├── service.exe              # WebService
    └── update.cmd               # Skript zum aktualisieren aller Dependencies
```

## Start
