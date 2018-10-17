const test = require("tape");
const getRxCUIbyType = require("../lib/get-rxcui-by-type");

test("get rxcui for atc code", t => {
  getRxCUIbyType({ idType: "ATC", id: "N05AH04" }).then(rxcui => {
    t.equals(rxcui, "51272", "N05AH04 is 51272");
    t.end();
  });
});
