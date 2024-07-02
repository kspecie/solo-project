const express = require('express');
const countryController = require('../controllers/countryController')
//creates new router object
const router = express.Router();

//GET COUNTRY INFO ROUTER HANDLER - TEST
// router.get('/', countryController.getCountryInfo, (req, res) => {
//     console.log("I finished test getCountryInfo and now I'm sending back a good response")
//     return res.status(200).json({'something': 'something to parse'});
// })

//GET COUNTRY INFO ROUTE HANDLER - TO TRAVEL API WITH COUNTRY NAME AS PARAM
router.get('/:country', countryController.getCountryInfo, (req, res) => {
    console.log("I finished real getCountryInfo and now I'm sending back a good response")
    //console.log(res.locals.countryData)
    return res.status(200).json({'countryData': res.locals.countryData});
});

module.exports = router;