const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');
const config = require('./config/database');
const nodemailer = require("nodemailer");

mongoose.connect(config.database, { useNewUrlParser: true });

// on connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});

// on error 
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

app.use(cors());
app.use(bodyParser.json());

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

// port number 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>서비스 준비중입니다...</h1>')
});

app.get('/login', (req, res) => {
  res.send('<h1>로그인이 필요합니다...</h1> <p>ID, password 필요하지요. ㅎㅎㅎ</p>')
});


// start server 
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

app.post('/sendFormData', (req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
      user: 'testG4eng@gmail.com', // must be Gmail
      pass: 'didrudah2'
    }
  });

  var mailOptions = {
    from: 'testG4eng@gmail.com',
    to: `<${req.body.email}>`, // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'Sending Email using Node.js',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">Name</th>
                  <th style="padding: 10px 0">E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="text-align: center">${req.body.name}</th>
                  <td style="text-align: center">${req.body.email}</td>
                </tr>
              </tbody>
            </table>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      })
    }
  });

});