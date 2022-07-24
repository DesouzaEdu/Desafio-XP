require('dotenv').config();
const app = require('./api');
const routers = require('./router');

const port = process.env.PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});
app.use(routers);
app.listen(port, () => console.log('ouvindo porta', port));
