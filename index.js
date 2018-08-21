const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const app = express();
const prod = true;



//smpt definition
console.log('==================start====================');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
//mailgun
// if (!prod) {
//   // const mailgunConfig = require('./config/keys');
//   // var mailgun = require('mailgun-js')({apiKey: mailgunConfig.mailgunApiKey  
//   //   , domain: mailgunConfig.mailgunDomain });
// } else
// {
//   console.log('prod envorinment')
//   var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
// }

 


//
app.get('/', function(request, response) {
  response.render('pages/index');
});
// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
    const count = 5;
  
    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
      generatePassword(12, false)
    )
  
    // Return them as json
    res.json(passwords);
  
    console.log(`Sent ${count} passwords`);
    var data = {
      from: 'Power User <p.harendarz@gmail.com>',
      to: 'p.harendarz@gmail.com',
      subject: 'test_mails',
      text: 'Testing some Mailgun send from ONEY!!'
    };
     
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
  });
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname+'/client/build/index.html'));
    response.render('pages/index');
  });
//send email

var api_key = 'ccc83115d2c795ebc91860bdae499400-a4502f89-cc1c9ae8';
var domain = 'sandboxa0f967162ee142029018cbc3d1852cc5.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'serobnic@mail.ru',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };
 
// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });

app.get('/send', function(request, response) {
    var data = {
      from: 'Power User <p.harendarz@gmail.com>',
      to: 'p.harendarz@gmail.com',
      subject: 'test_mails',
      text: 'Testing some Mailgun send from ONEY!!'
    };
     
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
    // return <div>message sent</div>
  });

const port = process.env.PORT || 5000;
app.listen(port);
console.log('===============end=================');
