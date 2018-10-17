const test = require("tape");
const getRxCUI = require("../lib/get-rxcui");

test("get rxcui object", t => {
  getRxCUI("51272").then(obj => {
    t.deepEquals(obj, {
      name: "quetiapine",
      rxcui: "51272"
    });
    t.end();
  });
});
