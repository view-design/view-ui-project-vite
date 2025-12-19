# view-ui-project-vite
This project build for Vue3, Vue-router, Pina, ViewUIPlus and Vite.
## Install
```shell
npm install
```
## Run
```shell
npm run serve
```
## Build
### Build for Production
```shell
npm run build
```
### Build for Staging
```shell
npm run build:staging
```
## Preview
### Preview for Production
```shell
npm run preview
```
### Preview for Staging
```shell
npm run preview:staging
```
## .env Description

- This project exposes environment variables on `import.meta.env` object.
- Different modes (development/staging/production) correspond to different environment files (.env.*).
- .env file is always included, duplicate variables are overwritten by the specific mode file (.env.*).
