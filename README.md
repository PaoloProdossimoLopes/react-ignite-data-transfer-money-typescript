# 🖥 Ignite data transfer application
Data transfer money simulator builded with react

### PROTOTYPE
You can see the figma design for this application [here](https://www.figma.com/file/QtnW0RRmNqJ24mrKaKE8lS/DT-Money-(Copy)?node-id=0%3A1&t=MnBv9atSl3E4yFCo-1).

### DEPENDENCIES
- Vite
- React
- [Styled components](https://www.npmjs.com/package/styled-components)
- Typescript
- Phosphor react
- [Json server](https://github.com/typicode/json-server)
- [Radix](https://www.radix-ui.com/)
- ESLint ([Rocketseat config]()) *obs: needs to install vscode extension*
- [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
<!-- - [React router DOM]() -->
<!-- - React Hook Form (+ Hook Form Resolvers) -->
<!-- - Zod -->

## CONFIGURATIONS
1. Install [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension at IDE (VSCode)
2. Add the configuration to enable auto fix issues on save
  1. navigate to IDE settings (`settings.json`) and add following config:
  ```json
  "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.organizeImports": true
  }
  ```
3. Install [VSCode styled components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) extension

### INSTALATION
1. Open your terminal in location that you want save the project.
2. Clone the repo in this local.
```sh
git clone https://github.com/PaoloProdossimoLopes/react-ignite-data-transfer-money-typescript.git
```
3. Open the directory react-ignite-timer-rocketseat.

### RUN
So that you can run the project follow this steps:
1. Starts running the following command `npm i` to install the dependencies from package.json.
2. Then run the command shortcut `npm run dev:server` to active the json server at default port with delay*
3. Then run the command `npm run dev` to start application at localhost.
4. Open the browser at url: `http://localhost:5173/`

*if you want before a step 3 your can run this options to up the server:
```shell
# Running json server in the watch mode witout delay to responds
npx json-server server.json -w

# Running the json servert with delay and the watch mode
npx json-server server.json -w -d 500

# Running the json server at specific port
npx json-server server.json -p 3333 -w -d 500
```

## 📃 License:
The MIT license was used in this project.

## Contact:
[![Github](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PaoloProdossimoLopes)
[![Gmail](https://img.shields.io/badge/Gmail-black?style=for-the-badge&logo=gmail&logoColor=white)](mailto:paolo.prodossimo.lopes@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-black?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ios.dev.br/)
[![Linkedin](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paoloprodossimolopes/)
[![Medium](https://img.shields.io/badge/Medium-black?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@pprodossimo)