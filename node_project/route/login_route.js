const express = require("express");
const { signupMiddleware, verifyUser } = require("../helper/jwt_hellper");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email } = req.body;
  console.log(email);
  const token = signupMiddleware(email);

  res.status(200).json({ token: token });
});
router.post("/verify", async (req, res) => {
  const { token } = req.body;
  console.log(token);
  const user = await verifyUser(token);

  res.status(200).json({ user });
});

module.exports = router;
