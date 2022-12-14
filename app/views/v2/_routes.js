const express = require('express')
const router = express.Router()

var version = 'v2';

///////////////////////////////////////////////////////////////////
// LOAD PAGE SPECIFIC GETS FIRST
///////////////////////////////////////////////////////////////////

// If you want to pass specific data to a page, like for errors or arrays like months, add them here at the top of the file
router.get('/personal-details/check-your-answers/cya', function (req, res) {
    res.render(version + '/personal-details/check-your-answers/cya', {
        'version': version,
    })
})

///////////////////////////////////////////////////////////////////
// ADD ALL PAGE POSTS AND REDIRECTS HERE
///////////////////////////////////////////////////////////////////

// Posting full name
router.post('/personal-details/full-name', function (req, res) {
    // Create a variable for the data submitted with the form ('full-name')
    var full_name = req.session.data['full-name'];
    
    // If full_name is empty
    if (!full_name) {
        // Render the same page, but push data back for the error message
        res.render(version + '/personal-details/full-name', {
            'error': 'Enter your full name'
        })
                
    // Full name is not empty so, if full_name is less than 3 characters
    } else if (full_name.length < 3) {
        // Render the same page, but push data back for the error message
        res.render(version + '/personal-details/full-name', {
            'error': 'Full name must be at least 3 characters'
        })
    
    // Full name is not empty so, and it's longer than 3 characters so go to the next page
    } else {
        res.redirect('date-of-birth');
    }
})

// Posting date of birth
router.post('/personal-details/date-of-birth', function (req, res) {
    // Create a variable for the three data items submitted with the form ('date-of-birth')
    var dob_day = req.session.data['date-of-birth-day'];
    var dob_month = req.session.data['date-of-birth-month'];
    var dob_year = req.session.data['date-of-birth-year'];
    
    // If any of the date inputs are empty
    if (!dob_day || !dob_month || !dob_year) {
        // Render the same page, but push data back for the error message
        res.render(version + '/personal-details/date-of-birth', {
            'error': 'Enter your date of birth'
        })
    
    // Date of birth is not empty so go to the next page
    } else {
        res.redirect('check-your-answers/cya');
    }
})

module.exports = router