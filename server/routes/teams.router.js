const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// gets all teams alphabetically
router.get('/', (req, res) => {
    const query = ` SELECT * FROM "teams" ORDER BY "location" ASC `
    pool.query(query)
    .then(result => {
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
      })
}); 

// gets specific team by name
router.get('/:name', (req, res) => {
    const query = `SELECT * FROM "teams" WHERE "name" = $1`
    const params = [req.params.name]

    pool.query(query, params)
    .then(result => {
        res.send(result.rows[0])
    }).catch(err => {
        res.sendStatus(500)
      })
}); 

module.exports = router