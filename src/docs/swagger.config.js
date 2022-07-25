const swaggerConfig = {
    definition: {
    openapi: "3.0.1",
    info: {
    title: "Desafio API-XP",
    description: "API que simula requisições de uma carteira de investimentos",
    version: "1.0"
    },
    servers:[{
    url: "https://desafio-xp-edu.herokuapp.com/",
    description: "servidor heroku"
    }]
    },
    apis: ["./src/router.js"]
    }
    
    module.exports = swaggerConfig;