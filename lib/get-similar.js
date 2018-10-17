const stringSimilarity = require("string-similarity");
const { compose, map, prop, find, equals, toUpper, assoc } = require("ramda");
const drugNamesToUppercase = map(
  compose(
    toUpper,
    prop("name")
  )
);
const equalsName = target =>
  compose(
    equals(target),
    toUpper,
    prop("name")
  );

/**
 *
 * getSimilar
 *
 * find the best match using Dice Coeficient Algorithm
 *
 * @param drugText {string}
 * @param drugs {object[]} - Array of objects containing name and string {name: string, rxcui: string}[]
 * @returns {object} - {name: string, rxcui: string, rating: string}
 */
const getSimilar = (drugText, drugs) => {
  const matches = stringSimilarity.findBestMatch(
    toUpper(drugText),
    drugNamesToUppercase(drugs)
  );
  let best = find(equalsName(matches.bestMatch.target), drugs);
  best = assoc("rating", matches.bestMatch.rating, best);
  return best;
};

module.exports = getSimilar;
