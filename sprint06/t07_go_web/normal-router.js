const express = require('express');
const router = express.Router();

exports.calculateTime = function() {
    let start_date = new Date(1939, 0 , 1);
    let current_date = new Date();
    let years = current_date.getFullYear() - start_date.getFullYear();
    let months = current_date.getMonth() - start_date.getMonth();
    let date = current_date.getDate() - start_date.getDate();
    const datetime = {
        years: function() { return years; },
        months: function() { return months; },
        days: function() { return date; }
    };
    return datetime;
}

router.get('/normal', (req, res) => {
    const time = exports.calculateTime();
    res.render('normal', { time: time });
});

module.exports = router;