require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const teamsRouter = require('./routes/teams.router.js')
const playersRouter = require('./routes/players.router.js')

/* Middlewear */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/* Express Routes */
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);

/* * Start Server * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});