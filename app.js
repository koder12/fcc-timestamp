var express = require('express');
var app = express();

function uton(timestamp) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var valid = (new Date(timestamp)).getTime() > 0;
    if (valid) {
        var a = new Date(timestamp * 1000);
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var day = a.getDate();
        return (month + ' ' + day + ', ' + year);
    }
    return null;
}

function ntou(time) {
    return new Date(time).getTime() / 1000 || null;
}

app.get("/", function (req, res) {
    res.json({
        msg: 'Welcome to Welcome to Timestamp microservice'
    })
});

app.get("/:query", function (req, res) {
    var q = req.params.query;
    var t = parseInt(q);
    var n1 = ntou(q);
    var n2 = uton(t);

    if (n1== null && n2==null){
        res.json({unix: null, natural: null});
    }

    else if (n1==null){
        res.json({unix: t, natural: n2});
    }

    else {
        res.json({unix: n1, natural: q});
    }
});


var listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + '3000');
});