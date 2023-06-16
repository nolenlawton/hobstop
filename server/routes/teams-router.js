const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const query = ` SELECT * FROM "teams" `
    console.log('here!!!!!')
    pool.query(query)
    .then(result => {
        console.log(result)
        res.send(result.rows)
    }).catch(err => {
        res.sendStatus(500)
      })
}); 

module.exports = router