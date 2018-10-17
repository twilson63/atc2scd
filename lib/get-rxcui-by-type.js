require("isomorphic-fetch");
const { path, invoker } = require("ramda");
const toJSON = invoker(0, "json");
const pluck = path(["idGroup", "rxnormId", "0"]);
const url = (idtype, id) =>
  `https://rxnav.nlm.nih.gov/REST/rxcui.json?idtype=${idtype}&id=${id}`;

/**
 * getRxCUIbyType
 *
 * get rxcui identifier by the code: ie. ATC, GCNSEQNO, etc
 *
 * @param obj {idtype: string, id: string}
 * @returns {string} - rxcui id
 */
module.exports = ({ idType, id }) =>
  fetch(url(idType, id))
    .then(toJSON) // res => res.json()
    .then(pluck) // plucks rxcui
    .catch(err => {
      console.log("ERROR with getRxCUIbyType -> " + err.message);
      return null;
    });
