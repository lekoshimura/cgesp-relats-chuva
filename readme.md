# CGE Relatório de Chuvas

Página com lista de relatórios de chuva mensal elaborados pelo CGE.

## Setting Up Development Environment

* Windows 10
* NodeJS v16.8.0
* NPM 7.21.0
* http-server v14.1.0

## NPM Modules

* [http-server](https://github.com/http-party/http-server): http-server is a simple, zero-configuration command-line static HTTP server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development and learning.

```powershell
> npm install --global http-server
```

At **package.json**:

```json
"scripts": {
  "start": "http-server -o ./src/relatorio-chuvas.html"
}
```

Launch at localhost:

```powershell
> npm start
```
