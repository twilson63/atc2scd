require("isomorphic-fetch");
const { invoker } = require("ramda");
const toJSON = invoker(0, "json");
const url = rxcui => `https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}.json`;
/**
 * gets the name and rxcui object from the rxcui identifier
 *
 * @param rxcui {string} - rxcui identifier
 * @returns {Promise} - {name, rxcui}
 */
const getRxcui = rxcui =>
  fetch(url(rxcui))
    .then(toJSON)
    .then(({ idGroup }) => ({
      name: idGroup.name,
      rxcui
    }))
    .catch(err => {
      console.log("ERROR with getRxCUI -> " + err.message);
      return {};
    });

module.exports = getRxcui;
