const getRxCUIByType = require("./lib/get-rxcui-by-type");
const getRxCUI = require("./lib/get-rxcui");
const getRelated = require("./lib/get-related");
const getSimilar = require("./lib/get-similar");
const { pipeP } = require("ramda");
const getRelatedDrugs = ({ name, rxcui }) =>
  getRelated(rxcui, "SCD").then(drugs => ({ name, drugs }));
const getSimilarDrug = (strength, form) => ({ name, drugs }) =>
  getSimilar(`${name} ${strength} ${form}`, drugs);
/**
 * atc2scd
 *
 * find Semantic Clinical Drug from atc code, strength, and form
 *
 * @param { object } - atc object {atc:string, strength: string, form: string}
 * @returns { object } - {atc: string, strength: string, form: string, rxcui: string, name: string, rating: number }
 */
const findDrug = ({ atc, strength, form }) =>
  pipeP(
    getRxCUIByType, // get rxcui
    getRxCUI, // get ingredient object
    getRelatedDrugs, // get scd drugs
    getSimilarDrug(strength, form) // get best match scd drug
  )({ idType: "ATC", id: atc });

module.exports = findDrug;
