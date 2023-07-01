const express = require('express');
const router = express.Router();
const axios = require('axios');

// gets standings (not in correct order)
router.get('/', async (req, res) => {
    const date = new Date()
    const year = date.getFullYear()

    const params = {
        league: 'standard',
        season: year - 1
    }
    
    const headers= {
        'X-RapidAPI-Key': 'db89ad65e1msha03ef936bb53d65p10247cjsn96f41dfc3fa4',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }

       axios.get('https://api-nba-v1.p.rapidapi.com/standings', {params, headers})

    .then(response => {
        res.send(response.data.response)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router;