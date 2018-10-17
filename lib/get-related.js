require("isomorphic-fetch");
const { invoker, pathOr } = require("ramda");
const toJSON = invoker(0, "json");
const url = (rxcui, idType) =>
  `https://rxnav.nlm.nih.gov/REST/rxcui/${rxcui}/related.json?tty=${idType}`;
const results = pathOr(
  [],
  ["relatedGroup", "conceptGroup", "0", "conceptProperties"]
);
/**
 * getRelated
 *
 *
 *
 * @param rxcui {string} - rxnorm rxcui
 * @param idType {string} - rxnorm term type
 * @returns results - collection of related rxcuis
 */
const getRelated = (rxcui, idType) =>
  fetch(url(rxcui, idType))
    .then(toJSON)
    .then(results)
    .catch(err => {
      console.log("ERROR with getRelated - " + err.message);
      return [];
    });

module.exports = getRelated;
