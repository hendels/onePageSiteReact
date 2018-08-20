const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const app = express();

const mailgunConfig = require('./config/keys');

//smpt definition
console.log('==================start====================');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
//mailgun
var mailgun = require('mailgun-js')({apiKey: mailgunConfig.mailgunApiKey || 
  process.env.MAILGUN_API_KEY, domain: mailgunConfig.mailgunDomain || process.env.MAILGUN_DOMAIN});
 


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
  });
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
//send email

app.post('/send', function(request, response) {
  var data = {
    from: 'Excited User <p.harendarz@gmail.com>',
    to: 'p.harendarz@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun send!!'
  };
   
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    }
    console.log(body);
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('===============end=================');
