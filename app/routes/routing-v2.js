module.exports = function (router) {

    ///////////////////////////////////////////////////////////////////
    // CHANGE ME TO THE VERSION YOURE WORKING ON
    ///////////////////////////////////////////////////////////////////
    var version = "v2";

    ///////////////////////////////////////////////////////////////////
    // GLOBAL VARIABLES AND OBJECTS FOR LOGIC OR TO SEND BACK TO PAGES
    ///////////////////////////////////////////////////////////////////
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    ///////////////////////////////////////////////////////////////////
    // LOAD PAGE SPECIFIC GETS FIRST
    ///////////////////////////////////////////////////////////////////

    // If you want to pass specific data to a page, like for errors or arrays like months, add them here at the top of the file
    router.get('/' + version + '/personal-details/check-your-answers/cya', function (req, res) {
        res.render(version + '/personal-details/check-your-answers/cya', {
            'version': version,
            'months': months[req.session.data['date-of-birth-month']-1]
        });
    });

    ///////////////////////////////////////////////////////////////////
    // ADD ALL PAGE POSTS AND REDIRECTS HERE
    ///////////////////////////////////////////////////////////////////

    // Posting full name
    router.post('/' + version + '/personal-details/full-name', function (req, res) {
        // Create a variable for the data submitted with the form ('full-name')
        var full_name = req.session.data['full-name'];
        
        // If full_name is empty
        if (!full_name) {
            // Render the same page, but push data back for the error message
            res.render(version + '/personal-details/full-name', {
                'version': version,
                'error': 'Enter your full name'
            })
                    
        // Full name is not empty so, if full_name is less than 3 characters
        } else if (full_name.length < 3) {
            // Render the same page, but push data back for the error message
            res.render(version + '/personal-details/full-name', {
                'version': version,
                'error': 'Full name must be at least 3 characters'
            })
        
        // Full name is not empty so, and it's longer than 3 characters so go to the next page
        } else {
            res.redirect('/' + version + '/personal-details/date-of-birth');
        }
    })

    // Posting date of birth
    router.post('/' + version + '/personal-details/date-of-birth', function (req, res) {
        // Create a variable for the three data items submitted with the form ('date-of-birth')
        var dob_day = req.session.data['date-of-birth-day'];
        var dob_month = req.session.data['date-of-birth-month'];
        var dob_year = req.session.data['date-of-birth-year'];
        
        // If any of the date inputs are empty
        if (!dob_day || !dob_month || !dob_year) {
            // Render the same page, but push data back for the error message
            res.render(version + '/personal-details/date-of-birth', {
                'version': version,
                'error': 'Enter your date of birth'
            })
        
        // Date of birth is not empty so go to the next page
        } else {
            res.redirect('/' + version + '/personal-details/check-your-answers/cya');
        }
    })



    ////////////////////////////////////////////////////////////////////////////////////////
    // CATCH ALL ROUTES - CAN ONLY THINK OF GET REQUESTS AND PASSING DATA RIGHT NOW
    ////////////////////////////////////////////////////////////////////////////////////////

    // This route should go at the end of the file and is for passing the version
    // variable back to the page for things like version tags, javascript routing or urls
    router.get('/' + version + '*', function (req, res) {
        //Trim leading '/' from page requested url
        var page_requested = req.originalUrl;
        page_requested = page_requested.substring(1);

        res.render(page_requested, {
            'version': version,
        });
    });
}