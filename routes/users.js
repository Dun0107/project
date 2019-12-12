const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/database");

const Write = require("../models/write");
const View = require("../models/view");
const Message = require("../models/message");

// Register 사용자등록
router.post("/register", (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    age: req.body.age
  });

  // User.getUserByUsername(newUser.username, (err, user) => {
  //   if (err) throw err;
  //   if (user) {
  //     return res.json({
  //       success: false,
  //       msg: "동일한 아이디가 존재합니다. 사용자 등록 실패."
  //     });
  //   } else {
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "사용자 등록 실패" });
    } else {
      res.json({ success: true, msg: "사용자 등록 성공" });
    }
  });
});
//   });
// });

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
        success: true,
        msg: "개인정보 수정"
      });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: "개인정보 수정 실패" });
        } else {
          res.json({ success: true, msg: "개인정보 수정 성공" });
        }
      });
    }
  });
});
router.post("/write", (req, res, next) => {
  let newWrite = new Write({
    name: req.body.name,
    title: req.body.title,
    content: req.body.content
  });
  Write.addWrite(newWrite, (err, write) => {
    if (err) {
      res.json({ success: false, msg: "게시글 등록 실패" });
    } else {
      res.json({ success: true, msg: "게시글 등록 성공" });
    }
  });
});

router.post("/message", (req, res, next) => {
  let newMessage = new Message({
    name: req.body.name,
    content: req.body.content
  });
  Message.addMessage(newMessage, (err, message) => {
    if (err) {
      res.json({ success: false, msg: "한줄 글 등록 실패" });
    } else {
      res.json({ success: true, msg: "한줄 글 등록 성공" });
    }
  });
});

router.post("/view", (req, res, next) => {
  let newView = new View({
    name: req.body.name,
    content: req.body.content
  });
  View.addView(newView, (err, view) => {
    if (err) {
      res.json({ success: false, msg: "댓글 등록 실패" });
    } else {
      res.json({ success: true, msg: "댓글 등록 성공" });
    }
  });
});

router.post("/check", (req, res, next) => {
  const password = req.body.password;

  if (password == "lbc12345") {
    res.json({
      success: true,
      msg: "교수님 인증을 성공했습니다."
    });
  } else {
    return res.json({
      success: false,
      msg: "패스워드가 틀렸습니다."
    });
  }
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
    // res.json({
    //   user: {
    //     username: req.user.username,
    //     email: req.user.email,
    //     name: req.user.name,
    //     age: req.user.age
    //   }
    res.json({ user: req.user });
  }
);

router.get("/list", (req, res, next) => {
  Write.getAll((err, writes) => {
    if (err) throw err;
    res.json(writes);
  });
});
router.get(
  //view
  "/list2",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    View.getAll((err, views) => {
      if (err) throw err;
      res.json(views);
    });
  }
);

router.get(
  //dashboard2
  "/list3",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Message.getAll((err, messages) => {
      if (err) throw err;
      res.json(messages);
    });
  }
);

module.exports = router;
