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
 * @param drugs {{name: string, rxcui: string}[]} - Array of objects containing name and string
 * @returns {name: string, rxcui: string, rating: string}
 */
module.exports = (drugText, drugs) => {
  const matches = stringSimilarity.findBestMatch(
    toUpper(drugText),
    drugNamesToUppercase(drugs)
  );
  let best = find(equalsName(matches.bestMatch.target), drugs);
  best = assoc("rating", matches.bestMatch.rating, best);
  return best;
};
