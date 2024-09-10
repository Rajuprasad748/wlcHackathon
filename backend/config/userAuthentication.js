const jwt = require('jsonwebtoken');
const token = localStorage.getItem('authToken');


const isLoggedIn = (req, res, next) => {
  // const token = localStorage.getItem('authToken');
    try {
      if (token) {
        const user = jwt.verify(token, "MYNAMEISRAJUPRASAD");
        req.user = user;
        next();
      } else {
        res.redirect("/login");
      }
    } catch (err) {
     console.log(err)
      res.status(401).json({ success: false, message: "Invalid token" });
    }
  };

module.exports = isLoggedIn ;
