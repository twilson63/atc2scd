const test = require("tape");
const getDrug = require("../");

test("get best matched drug", async t => {
  const drug = await getDrug({
    atc: "N05AH04",
    strength: "50 mg",
    form: "Prolonged-release tablet"
  });
  t.deepEquals(drug, {
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
