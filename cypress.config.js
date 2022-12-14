const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    //definir url de início
    baseUrl: 'https://buger-eats-qa.vercel.app',

    //conectando projeto ao dashboard do cypress:
    projectId: "bx2eks",

     //definir resolução da janela
    viewportWidth: 1440,
    viewportHeight: 900,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
