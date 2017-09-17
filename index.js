// Nodemailer files
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app)
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.listen(port, function(){
    console.log('on port ' + port);
})

// Temp post method
app.post('/', function(req, res){
    console.log((req.body.data))
});

// Info about Gmail api
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'danielcarmel6@gmail.com',
        clientId: '18393784530-kc64jns09lk6uoqanposf7p7l2ijmum4.apps.googleusercontent.com',
        clientSecret: 'RS4TxSU7Ajd0WCyUsOMccBQ3',
        refreshToken: '1/s41GDarVjskeA0Mre0bhLnZV2ogap9kagFnqBiqi2Wc',
        accessToken: 'ya29.Glu8BCrndiak-eu6S4-Y0meN5dlGNKvtj3iz0hdunXAkevd8R9s76QAb8VQwPPW9j1s8qJQZ7EZ969H9fxgv9LdRLHWsOOLdogEOcj0rJSX9XLYITNsycPi_nB8v'
    }
})

// mail variable
var mailOptions = {
    from: 'Daniel <danielcarmel6@gmail.com>',
    to: 'daniel.store.ebay@gmail.com',
    subject: 'The shit works!',
    text: 'Hey future bae',
    html: '<p>HTML version of message(recommended)</p>'
};

// Send the mail
transporter.sendMail(mailOptions, function(err, res){
    if(err){
        console.log(err);
    } else {
        console.log('Email sent');
    }
})