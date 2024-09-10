const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_KEY = "MYNAMEISRAJUPRASAD";
const admin = require('../models/admin-model');

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let userData = await admin.findOne({ email });

    if (!userData) {
      return res.status(400).json({ error: "Enter a valid email address..." });
    }
    const pwdCompare = await bcrypt.compare(password, userData.password);
    console.log(pwdCompare);
    if (!pwdCompare) {
      return res.status(400).json({ error: "Enter a valid password..." });
    }
    if (pwdCompare) {
      const user = {
        email: userData.email,
      };
      const authToken = jwt.sign(user, JWT_KEY);
      return res.json({ success: true, authToken: authToken , user : user });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports =  router;
