const axios = require("axios");
/* let ermöglicht es Variablen zu deklarieren, deren Gültigkeitsbereich 
auf den Block, den Befehl oder den Ausdruck beschränkt ist, in dem sie deklariert sind.  */
let express = require("express");
let router = express.Router();
/* Const kann eine symbolische Konstante deklariert werden. Dabei wird analog zur Initialisierung 
einer Variable ein Bezeichner an einen Wert gebunden, mit dem Unterschied, dass bei einer 
Konstante diese Bindung später nicht mehr verändert werden kann. */

/* Die get Syntax bindet eine Objekteigenschaft an eine Funktion */
const getInsult = async () => {
  /* Die try. catch-Anweisung rahmt einen Block von Anweisungen ein und legt Reaktionen 
  fest, die im Fehlerfall ausgeführt werden. */
  try {
    const response = await axios.get(
      "https://evilinsult.com/generate_insult.php?lang=en&type=json"
    );
    /* Die return Anweisung beendet einen Funktionsaufruf und spezifiziert einen Wert,
     der von der Funktion zum Aufrufer zurückgegeben wird. */
    return response.data.insult;
  } catch (error) {
    throw error;
  }
};

/* Zur Hompage */
router.get("/", async (req, res, next) => {
  console.log("test");
  try {
    const insult = await getInsult();
    /* Die Daten aus der API die Abgerufen werden sollen */
    res.render("index", { title: "Evil", data: insult });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
