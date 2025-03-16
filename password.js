"use scrict";

let pass = document.querySelector("#pass"),
  check = document.querySelector("#check");

check.addEventListener("change", function() {
 
  pass.type = check.checked ? 'text' : 'password'
});
