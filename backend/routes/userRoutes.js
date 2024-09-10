const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const user = require("../models/user-model");
const feedback = require("../models/feedback-model");
require("dotenv").config();

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
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),

    body("contact", "Invalid mobile number").trim().isLength({ min: 10, max: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, contact, animal } = req.body;

    try {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return res.send("error while generating salt");
        }

        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.send("error while hashing the password");
          }
          const createdUser = await user.create({
            username,
            email,
            password: hash,
            contact,
            animal,
          });

          if (createdUser) {
            return res.json({success: true});
          }
        });
      });
    } catch (error) {
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
      .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ error: "Enter a valid email address..." });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ error: "Enter a valid password..." });
      }

      if (pwdCompare) {
        const user = {
          _id: userData._id,
          username: userData.username,
          contact: userData.contact,
          animal: userData.animal,
          email: userData.email,
        };
        const authToken = jwt.sign({email : userData.email }, "MYNAMEISRAJUPRASAD");
        res.cookie('token' , authToken);
        return res.json({ success: true, user: user });
      }
    } catch (error) {
      res.json({ success: false });
    }
  }
);
router.post("/feedback", async (req, res) => {
  const { username, email, message } = req.body;
  try {
    const newFeedback = await feedback.create({ username, email, message });
    if (newFeedback) {
      return res.json({ message: "Feedback submitted successfully!" });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.get("/profile", (req, res) => {
  const decoded = jwt.verify(val, 'MYNAMEISRAJUPRASAD');
});

module.exports = router;
