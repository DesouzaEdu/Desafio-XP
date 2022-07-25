require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const app = require('./api');
const swaggerConfig = require('./docs/swagger.config');
const routers = require('./router');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.use(routers);
app.listen(port, () => console.log('ouvindo porta', port));
