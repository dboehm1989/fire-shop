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

## Update

Bitte folgendes im Terminal eingeben:

```shell
# Skript zum aktualisieren aller Dependencies Test123
update.cmd
```

## Frontend Unit Tests

Bitte für die Frontend Unit Tests einmal die Abhängigkeiten installieren

```shell
# Skript zum installieren der Frontend Tests Abhängigkeiten
cd frontend
npm install
```

Zum ausführen der Tests:

```shell
# Skript zum installieren der Frontend Tests Abhängigkeiten
cd frontend
npm run test
```

Mit der Jest-Extension lassen sich Tests auch im Testfile selbst ausführen.

## Backend Unit Tests

Um die Backend Test auszuführen, ist keine weitere Abhängigkeit nötig

```shell
# navigiere ins zu testende Verzeichnis
go test
```

Zum ausführen aller Tests und um die Coverage zu erhalten:

```shell
cd backend
go test $(go list ./... | grep -v /vendor/) -v -coverprofile testCoverage.txt
go tool cover -html=testCoverage.txt
# optional zum abspeicher des Ergebnisses in eine Datei:
# go tool cover -html=.testCoverage.txt -o testCoverage.html
```

Mit der Go-Extension lassen sich Tests auch im Testfile selbst ausführen.

## Pipeline

Es existiert eine CI Pipeline in Gitlab https://gitlab.com/bfs-portal/kreditprotokoll/-/pipelines , diese Führt die Frontend-Unittest 1x Pro Tag aus, Werktags um 7:00 p.m. Zusätzlich lassen sich manuelle Builds triggern unter https://gitlab.com/bfs-portal/kreditprotokoll/-/pipeline_schedules  
Die Configuration der Pipeline ist in der .gitlab-ci.yml
Die Pipeline führt den Befehl

```shell
cd frontend
npm install
npm run testPipeline
```

aus.

## Start

Um die Anwendung komplett lokal mit Camunda & Co auszuführen:

```shell
# Anwendung lokal, erwartet Camunda unter https:8030 und OData-Mapper unter https:8034
kreditprotokoll.exe -unsafe
```

Um die Anwendung gegen ein anderes Backend laufen zu lassen:

```shell
# Anwendung lokal im BFS Netzwerk starten
kreditprotokoll.exe -unsafe -hosts portal-qa.bfs-ag.de -backend_url https://portal-qa.bfs-ag.de/kreditprotokoll

# Zusammen mit localproxy.exe in der BFS und Port-Forwarding mittels live-share:
kreditprotokoll.exe -unsafe -backend_url https://localhost:8080/kreditprotokoll

# Zum Testen der Mobilen Oberfläche, welche Public erreichbar ist:
kreditprotokoll.exe -unsafe -backend_url https://localhost:8080/kreditprotokoll -isExposed

# Lokal mit eigener Camunda Instanz ohne BFS-Zugriff
kreditprotokoll.exe -unsafe -odata_mapper_url mock -kreditprotokoll_service_url mock


# Lokal das lokale Backend starten gegen Testservice
cd backend
go run . -unsafe -hosts portal-qa.bfs-ag.de -camunda_rest_url https://portal-qa.bfs-ag.de/engine-rest -v -kreditprotokoll_service_url https://portal-qa.bfs-ag.de/kreditprotokoll-service -camunda_rest_auth ****:**** -cas pfad-zur-bfs-root.pem
```

## SASS/SCSS

Bitte `Live Sass Compiler` Erweiterung in VSCode installieren. Es kompiliert im Hintergrund SCSS/SASS zu CSS Dateien.<br />
In der `settings.json` Datei von VSCode bitte folgendes eintragen:

```shell
"liveSassCompile.settings.formats":[
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "~/../css/"
    }
]
```

### Minica

für die Lokale Entwicklung unter https muss mit minica ein Zertifikat installiert werden, und dieses als Benutzervariable unter FLAG_CERT (cert.pem) und FLAG_KEY (key.pem) hinzugefügt werden.

### Feature-Toggles

Mit '&uebersichtSearch' beziehungsweise '&ausCredaRateLadenZeigen' in der Url erscheint die Suche für die Kreditübersicht beziehungsweise die CredaRate-Funktionalität.
