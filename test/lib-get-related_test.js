const test = require("tape");
const getRelated = require("../lib/get-related");

test("get related Semantic Clinical Drugs", t => {
  getRelated("51272", "SCD").then(results => {
    t.equals(results.length, 12);
    t.end();
  });
});
