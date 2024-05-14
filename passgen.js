let first = "linton";
let last = "edimund";
function generatePassword(first, last) {
  let fname = first.slice(0, 3);
  let lname = last.slice(-3);

  let password = fname + lname + "@2024";

  return password;
}

console.log(generatePassword(first, last));
