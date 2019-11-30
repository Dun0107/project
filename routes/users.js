const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/database");

// Register 사용자등록
router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    age: req.body.age
  });

  User.getUserByUsername(newUser.username, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        success: false,
        msg: "동일한 아이디가 존재합니다. 사용자 등록 실패."
      });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: "사용자 등록 실패" });
        } else {
          res.json({ success: true, msg: "사용자 등록 성공" });
        }
      });
    }
  });
});

// getEmail 이메일 가져오기
router.post("/getemail", (req, res, next) => {
  let newInfo = new User({
    name: req.body.name,
    username: req.body.username,
  });

  User.getUserByInfo(newInfo.name, newInfo.username, (err, email) => {
    if (err) throw err;
    if (email) {
      console.log(email);
    }
  });
})

router.post('/sendmail', (req, res) => {
  const transporter = nodemailer.createTransport({
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
    to: `<${req.body.email}>`,
    cc:`${req.body.name} <${req.body.email}>`,
    subject: '임시 비밀번호 발급 메일입니다.',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">이름</th>
                  <th style="padding: 10px 0">학번</th>
                  <th style="padding: 10px 0">임시 비밀번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: center">${req.body.name}</td>
                  <td style="text-align: center">${req.body.username}</td>
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

// Authenticate 사용자인증, 로그인
router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found! 등록된 사용자가 없습니다..."
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // 1 week, 유효기간: 1주일
        });

        res.json({
          success: true,
          token: "JWT " + token,
          userNoPW: {
            // id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            age: user.age
          }
        });
      } else {
        return res.json({
          success: false,
          msg: "Wrong password. 패스워드가 틀립니다... "
        });
      }
    });
  });
});

// profile 접근은 로그인 상태에서만 토큰을 이용하여 접근하도록 설정
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      user: {
        username: req.user.username,
        email: req.user.email,
        name: req.user.name,
        age: req.user.age
      }
    });
  }
);

router.get("/list", (req, res, next) => {
  User.getAll((err, users) => {
    if (err) throw err;
    res.json(users);
  });
});

module.exports = router;