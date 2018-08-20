const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
const SparkPost = require('sparkpost');
const app = express();

//smpt definition
const apiKey = "01c53c7f5ca8658c8991f2f24ac2d38f140cf9e3" || process.env.SPARKPOST_API_KEY;
sparkpost = new SparkPost(apiKey);
console.log('==================start====================');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

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
  var recipients = "p.harendarz@gmail.com"
    , message = "test from heroku!";

  // recipients.forEach(function(val, index) {
  //   recipients[index] = { address: val };
  // });

  sp.transmissions.send({
    transmissionBody: {
      content: {
        from: 'heroku-node-js-example@sparkpostbox.com',
        subject: 'Heroku Node.js Example',
        html: '<html><body>' + message + '</body></html>'
      },
      options: {
        sandbox: false
      },
      recipients: recipients
    }
  }, function(err, apiResponse) {
    if(err) {
      response.json(err);
    } else {
      response.json(apiResponse.body);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('===============end=================');
