/**
 * Created by fmajeed on 18/10/2017.
 */
const express = require('express');
var path = require('path');
var ejs = require('ejs');
const app = express();

var engines = require('consolidate');

//app.set('views', __dirname + '/../dist');
//app.engine('html', engines.mustache);
//app.set('view engine', 'html');

ASSETS_DIR = '../dist'
app.set('view engine', 'html');
app.set('views', ASSETS_DIR);
app.engine('html', ejs.renderFile);
app.use(express.static(ASSETS_DIR))
const PORT = process.env.PORT || 9000;

app.get('/',function(req,res,next) {


    res.render(__dirname + "/dist/index.html");
});

app.listen(PORT, function () {
    console.log('demo app listening on port ' + PORT);
})
