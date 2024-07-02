const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');

//helper function for global error handler. return value
//is the object we pass into next, invoking global error handler
// const createErr = (errInfo) => {
//     const { method, type, err } = errInfo;
//     return { 
//       log: `countryController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
//       message: { err: `Error occurred in countryController.${method}. Check server logs for more details.` }
//     };
//   };

const countryController = {};

//MIDDLEWARE FOR GETTING COUNTRY DATA - TEST

// countryController.getCountryInfo = (req, res, next) => {
//     console.log("I made it to test  getCountryInfo method in countryController");
//     return next();
// // }
// };


countryController.getCountryInfo = async (req, res, next) => {
    console.log("I made it to real getCountryInfo method in countryController");
    //console.log(req.params)
    const country = req.params.country;
    //console.log(typeof country)
    try {
        const response = await fetch('https://restcountries.com/v3.1/name/' + country);
        const data = await response.json();
        res.locals.countryData = data;
        return next();
    }
    catch (err) {
        return next({
            log: 'error inside of real getCountryInfo' + err,
            status: 500,
            message: {err: 'error from swapi'}
        });
     };
};

module.exports = countryController;