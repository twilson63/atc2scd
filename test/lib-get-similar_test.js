const test = require("tape");
const getRelated = require("../lib/get-related");
const getSimilar = require("../lib/get-similar");

test("get best matched Semantic Clinical Drugs", async t => {
  const drugs = await getRelated("51272", "SCD");
  const result = getSimilar("quetiapine 50 mg Prolonged-release tablet", drugs);
  t.deepEquals(result, {
    rxcui: "853201",
    name: "24 HR quetiapine 50 MG Extended Release Oral Tablet",
    synonym: "quetiapine 50 MG 24 HR Extended Release Oral Tablet",
    tty: "SCD",
    language: "ENG",
    suppress: "N",
    umlscui: "C2702061",
    rating: 0.696969696969697
  });
  t.end();
});
