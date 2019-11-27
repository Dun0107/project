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

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "testG4eng@gmail.com",
      pass: "didrudah2"
    }
  }); 

const mailOptions = {
  from: "testG4eng@gmail.com",
  to: `fover32@gmail.com`,
  subject: "<Message subject>",
  html: "<h1>And here is the place for HTML</h1>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  