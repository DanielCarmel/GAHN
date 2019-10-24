// NodeJS files
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app)
var port = process.env.PORT || 3000;
var path    = require("path");

// Configure network traffic
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Server listening
server.listen(port, function(){
    console.log('on port ' + port);
})

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/forbidden.html'));
});

// POST get data from extention
app.post('/', function(req, res){
    var template = '';
    // Get the data from request
    var arr = JSON.parse(req.body.data);

    // Init the data into the template
    for(var key in arr){
        var currDate = new Date(Number(arr[key].time));
        template += '<tr><td class="lalign">'+ arr[key].url +'</td><td>'+ currDate +'</td></tr>'
    }

    // mail variable
    var mailOptions = {
        from: 'Daniel <danielcarmel96@gmail.com>',
        to: req.body.email,
        subject: 'Browse history of the day:)',
        html: setTemplate(template)
    };

    // Send the mail
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            console.log(err);
        } else {
            console.log('Email sent');
        }
    })
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

// Set the template to send to the mail
function setTemplate(templateData){
    var templateFull = '<html>\
    <head>\
        <script>\
            $(function () {\
                $("#keywords").tablesorter();\
            });\
        </script>\
        <style>\
            @import url("https://fonts.googleapis.com/css?family=Amarante");\
            html,body,div,span,applet,object,iframe,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,\
            big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,\
            dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,\
            canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,\
            time,mark,audio,\
            video {\
                margin: 0;\
                padding: 0;\
                border: 0;\
                font-size: 100%;\
                font: inherit;\
                vertical-align: baseline;\
                outline: none;\
                -webkit-font-smoothing: antialiased;\
                -webkit-text-size-adjust: 100%;\
                -ms-text-size-adjust: 100%;\
                -webkit-box-sizing: border-box;\
                -moz-box-sizing: border-box;\
                box-sizing: border-box;\
            }\
            html {\
                overflow-y: scroll;\
            }\
            body {\
                background: #eee url("https://i.imgur.com/eeQeRmk.png");\
                /* https://subtlepatterns.com/weave/ */\
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\
                font-size: 62.5%;\
                line-height: 1;\
                color: #585858;\
                padding: 22px 10px;\
                padding-bottom: 55px;\
            }\
            ::selection {\
                background: #5f74a0;\
                color: #fff;\
            }\
            ::-moz-selection {\
                background: #5f74a0;\
                color: #fff;\
            }\
            ::-webkit-selection {\
                background: #5f74a0;\
                color: #fff;\
            }\
            br {\
                display: block;\
                line-height: 1.6em;\
            }\
            article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,\
            section {\
                display: block;\
            }\
            ol,\
            ul {\
                list-style: none;\
            }\
            input,\
            textarea {\
                -webkit-font-smoothing: antialiased;\
                -webkit-text-size-adjust: 100%;\
                -ms-text-size-adjust: 100%;\
                -webkit-box-sizing: border-box;\
                -moz-box-sizing: border-box;\
                box-sizing: border-box;\
                outline: none;\
            }\
            blockquote,\
            q {\
                quotes: none;\
            }\
            blockquote:before,\
            blockquote:after,\
            q:before,\
            q:after {\
                content: "";\
                content: none;\
            }\
            strong,\
            b {\
                font-weight: bold;\
            }\
            table {\
                border-collapse: collapse;\
                border-spacing: 0;\
            }\
            img {\
                border: 0;\
                max-width: 100%;\
            }\
            /** page structure **/\
            #wrapper {\
                display: block;\
                width: 850px;\
                background: #fff;\
                margin: 0 auto;\
                padding: 10px 17px;\
                -webkit-box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.35);\
            }\
            #keywords {\
                margin: 0 auto;\
                font-size: 1.2em;\
                margin-bottom: 15px;\
            }\
            #keywords thead {\
                cursor: pointer;\
                background: #c9dff0;\
            }\
            #keywords thead tr th {\
                font-weight: bold;\
                padding: 12px 30px;\
                padding-left: 42px;\
            }\
            #keywords thead tr th span {\
                padding-right: 20px;\
                background-repeat: no-repeat;\
                background-position: 100% 100%;\
            }\
            #keywords thead tr th.headerSortUp,\
            #keywords thead tr th.headerSortDown {\
                background: #acc8dd;\
            }\
            #keywords thead tr th.headerSortUp span {\
                background-image: url("https://i.imgur.com/SP99ZPJ.png");\
            }\
            #keywords thead tr th.headerSortDown span {\
                background-image: url("https://i.imgur.com/RkA9MBo.png");\
            }\
            #keywords tbody tr {\
                color: #555;\
            }\
            #keywords tbody tr td {\
                text-align: center;\
                padding: 15px 10px;\
            }\
            #keywords tbody tr td.lalign {\
                text-align: left;\
            }\
        </style>\
    </head>\
    <body>\
        <div id="wrapper">\
            <table id="keywords" cellspacing="0" cellpadding="0">\
                <thead>\
                    <tr>\
                        <th><span>URL</span></th>\
                        <th><span>Time</span></th>\
                    </tr>\
                </thead>\
                <tbody>' + templateData + '\
                </tbody>\
            </table>\
        </div>\
    </body>\
    </html>'

    return(templateFull)
}
