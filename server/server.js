const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const teamsRouter = require('./routes/teams-router.js')

/* Middlewear */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/* Express Routes */
app.use('/', teamsRouter);

/* * Start Server * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});