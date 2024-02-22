const jwt = require("jsonwebtoken");
const secretKey = "testing";

const users = [
  { email: "html@gmail.com" },
  { email: "js@gmail.com" },
  { email: "css@gmail.com" },
];

const signupMiddleware = (user) => {
  users.some((value, index) => {});

  const token = jwt.sign({ user: user }, secretKey, { expiresIn: "1h" });
  return token;
};

const verifyUser = async (token) => {
  return jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT verification failed:", err);
      return;
    }

    console.log("Decoded JWT:", decoded);
    return decoded;
  });
};

module.exports = { signupMiddleware, verifyUser };
