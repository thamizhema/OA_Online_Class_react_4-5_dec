const user = { name: "flutter", age: 20, email: "flutter20@gmail.com" };
const companyInfo = { companyName: "OA", exp: 2 };
const updatedUser = { ...user, ...companyInfo, updatedTime: "now" }; // speard
const { email } = user; // destucture
console.log(email);
console.log(updatedUser);
