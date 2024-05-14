let password = "abiud@12";
let isValidPassword = true;

function isValidPassword(password) {
  if (!password) {
    console.log("Password cannot be blank.");
    return false;
  }
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      console.log("Password cannot contain repeated characters in a row.");
      return false;
    }
  }
  const commonPasswords = ["password", "123456", "qwerty", "abc123"];
  if (commonPasswords.includes(password.toLowerCase())) {
    console.log("Password cannot be a common password.");
    return false;
  }
  console.log("Password is valid!");
  return true;
}
