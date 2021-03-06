const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const app = express();
const prod = true;
const bodyParser = require('body-parser');


//smpt definition
console.log('==================start====================');
// Serve static files from the React app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/emailForm', (req, res) =>{
  console.log('...attempting to send email.');
    let reqFrom = '';
    console.log('email text = ' + req.body.emailText)
    if (req.body.emailText !== '') {
       reqFrom = req.body.emailText }
    else 
       {reqFrom = 'p.harendarz@gmail.com'};

    var data = {

      from: req.body.nameText + ' ' + reqFrom,
      to: 'p.harendarz@gmail.com',
      subject: 'Wiadomość z Twojej strony internetowej!',
      text: req.body.messageText + ' --------------------- numer telefonu: ' + req.body.phoneText 
    };
    console.log('...sending mail to: ' + reqFrom) ;
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
})
 


//
app.get('/', function(request, response) {
  response.json({cze: "start here"});
});
// Put all API endpoints under '/api'

const usersData= [];
app.get('/api/passwords', (req, res) => {
    const count = 5;
  
    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
      generatePassword(12, false)
    )
  
    // Return them as json
    res.json(passwords);
  });
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname+'/client/build/index.html'));
    res.render('pages/index');

  });
//send email

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgunApiKey = "ccc83115d2c795ebc91860bdae499400-a4502f89-cc1c9ae8";
var mailgunDomain = 'sandboxa0f967162ee142029018cbc3d1852cc5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key || mailgunApiKey, domain: domain || mailgunDomain});
 
const port = process.env.PORT || 5000;
app.listen(port);
console.log('===============end=================');
