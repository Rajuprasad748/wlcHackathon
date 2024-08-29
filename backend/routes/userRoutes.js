const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_KEY = "MYNAMEISRAJUPRASAD";
const { body, validationResult } = require("express-validator");
const user = require("../models/user-model");

router.post(
  "/signup",
  [
    body("username", "Username must be between 3 and 30 characters")
      .trim()
      .isLength({ min: 3, max: 30 }),

    body("email", "Invalid email format").trim().isEmail(),

    body(
      "password",
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"   

    )
      .trim()
      .isStrongPassword({ minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers: 1, minSymbols: 1 }),

    body("contact", "Invalid mobile number").trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, contact, animal } = req.body;
    console.log(username, email, password, contact, animal)

    try {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return res.send("error while generating salt");
        }

        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.send("error while hashing the password");
          }
          const createdUser = await user
            .create({
              username,
              email,
              password: hash,
              contact,
              animal,
            })

            if(createdUser){
             return res.json({ userId: createdUser._id })
            }

          const token = jwt.sign(
            { id: createdUser.email },
            JWT_KEY,
            (err, token) => {
              if (err) throw err;
              res.json({
                success: true,
                token: "Bearer" + token,
                user: createdUser,
              });
            }
          );

          console.log(token);
          res.cookie("token", token, { httpOnly: true, secure: true });
          localStorage.setItem('token', token);
        });
      });
    } catch (error) {
      console.log(error.message);
      res.json({ success: false });
    }
  }
);

router.post(
  "/login",
  [

    body("email", "Invalid email format").trim().isEmail(),

    body(
      "password",
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"   

    )
      .trim()
      .isStrongPassword({ minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers: 1, minSymbols: 1 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email , password} = req.body;
    try {
      let userData = await user.findOne({email});
      console.log(userData)
      if (!userData) {
        return res
          .status(400)
          .json({ error: "Enter a valid email address..." });
      }

      const pwdCompare =  bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ error: "Enter a valid password..." });
      }
      if(pwdCompare){
        const data = {
          user :{
            id: userData._id
          }
        }
        const authToken = jwt.sign(data, JWT_KEY)
        return res.json({ success: true , authToken : authToken});
      }
      } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
