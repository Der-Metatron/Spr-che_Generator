const axios = require("axios");

let express = require("express");
let router = express.Router();
/* Button Sound */

/* Input Feld */
/* 
const label = document.createElement("label");
label.setAttribute("for", "username");
label.innerHTML = "Username: ";

// insert label
document.body.appendChild(label);

// create textbox
const input = document.createElement("input");
input.setAttribute("id", "username");
input.setAttribute("type", "text");

// insert textbox
document.body.appendChild(input);
 */
/* Zur Hompage */
router.get("/", function (req, res, next) {
  console.log("test");
  res.render("index", { title: "EVIL" });
});
axios
  .get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
  .then(function (response) {
    console.log(response.data.insult);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});

module.exports = router;
