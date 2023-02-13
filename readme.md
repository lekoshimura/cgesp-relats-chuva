# CGE Relatório de Chuvas

Página com lista de relatórios de chuva mensal elaborados pelo CGE.

## Proof of Concept 1

* Armazenamento/recuperação de planilhas através de GitHub API.
* Referência: [https://docs.github.com/en/rest/repos/contents]
* Estrutura do link da requisição: `https://api.github.com/repos/{OWNER}/{REPO}/contents/PATH`

## Proof of Concept 2

* iframe exibindo diretório público do iCloud.
* <https://arquivos.saisp.br/nextcloud/index.php/s/qikdinFyAM33MJK?path=%2FBOLETIM_PLUVIOMETRICO>


Homologação em:

* <https://lekoshimura.github.io/cgesp-relats-chuva/src/relatorio-chuvas.html>

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
  "start": "http-server -p 8080 -o ./src/index.html"
}
```

Launch at localhost:

```powershell
> npm start
```
