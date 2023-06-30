const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/:team/:year', async (req, res) => {

    let params = {
        search: req.params.team
    }
    
    const headers= {
        'X-RapidAPI-Key': 'db89ad65e1msha03ef936bb53d65p10247cjsn96f41dfc3fa4',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }

        const results = await axios.get('https://api-nba-v1.p.rapidapi.com/teams', {params, headers})
        const id = results.data.response[0].id

        params = {
            team: id,
            season: req.params.year - 1
        }


        await axios.get('https://api-nba-v1.p.rapidapi.com/players', {params, headers})

    .then(response => {
        res.send(response.data.response)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})


// cant get all players at once ?
router.get('/:year', async (req, res) => {
    const playersByTeam = []

    const params = {
        season: req.params.year - 1,
        team: 'Karl'
    }
    
    const headers= {
        'X-RapidAPI-Key': 'db89ad65e1msha03ef936bb53d65p10247cjsn96f41dfc3fa4',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }

       const result = axios.get('https://api-nba-v1.p.rapidapi.com/players', {params, headers})

    .then(response => {
        console.log(response)
        res.send(response.data.response)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router;