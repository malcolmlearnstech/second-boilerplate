//our sequelize instance is created in 'database.js'
const db = require('./db/database');

//server that was created and used as the previous entry point is 'app.js'
const app = require('./app');
const port = process.env.PORT || 3000;

//this block is syncing our database
db.sync()
  .then(function () {
    console.log('Knock, knock');
    console.log("Who's there");

    //this block listens for server requests once we've synced the database
    app.listen(port, () =>
      console.log(`Your server, listening on port ${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
