module.exports = function (router) {

    ///////////////////////////////////////////////////////////////////
    // CHANGE ME TO THE VERSION YOURE WORKING ON
    ///////////////////////////////////////////////////////////////////
    var version = "v1";

    ///////////////////////////////////////////////////////////////////
    // LOAD PAGE SPECIFIC GETS FIRST
    ///////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////
    // ADD ALL PAGE POSTS AND REDIRECTS HERE
    ///////////////////////////////////////////////////////////////////

    // Posting full name
    router.post('/' + version + '/personal-details/full-name', function (req, res) {
        res.redirect('/' + version + '/personal-details/date-of-birth');
    })

    // Posting date of birth
    router.post('/' + version + '/personal-details/date-of-birth', function (req, res) {
        res.redirect('/' + version + '/personal-details/check-your-answers/cya');
    })
}