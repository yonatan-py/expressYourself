 var connect     = require('connect'),
        brackets    = require('brackets');
        var port = 5000;
    connect()
        .use('/brackets', brackets())
        .use(function (req, res) {
            res.end('Hello World');
        })
        .listen(port);

    console.log("\n  brackets listening on port " + port +"/brackets \n");

