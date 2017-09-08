// Nodemailer files
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const express = require('express');
const app = express();
const server = require('http').createServer(app)
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

server.listen(port, function(){
    console.log('on port ' + port);
})

// Routing 
//app.use(express.static(__dirname + 'public'));

// Temp post method
app.post('/', function(req, res){
    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;

    
    
    res.send(req.body.name + ' is ' + age + ' years old from ' + city);
    console.log(name + ' is ' + age + ' years old from ' + city);
});

app.get('/', function(req, res){
    res.send("hey you")
})

// Info about Gmail api
const transporter = nodemailer.createTransport({
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