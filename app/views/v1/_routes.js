const express = require('express')
const router = express.Router()

///////////////////////////////////////////////////////////////////
// LOAD PAGE SPECIFIC GETS FIRST
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// ADD ALL PAGE POSTS AND REDIRECTS HERE
///////////////////////////////////////////////////////////////////

// Posting full name
router.post('/personal-details/full-name', function (req, res) {
    console.log('Hit v1 route file')
    res.redirect('date-of-birth');
})

// Posting date of birth
router.post('/personal-details/date-of-birth', function (req, res) {
    res.redirect('check-your-answers/cya');
})

module.exports = router