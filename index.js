const server = require('./src/app.js');
require('dotenv').config();

const port = process.env.PORT;
// const { conn } = require('./src/db.js');
// const { DB_PORT } = process.env;
// const {
//  adminSingIn,
// } = require('./src/controllers/usersControllers/admin.controllers');

// Syncing all the models at once.
// conn.sync({ alter: true }).then(() => {
console.log(port);
server.listen(port, () => {
 console.log(`%s listening at ${port}`); // eslint-disable-line no-console
 server.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/utils/form.html');
 });
});
// });
