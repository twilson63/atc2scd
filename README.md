# atc2scd

This module takes an ATC Code, Strength and Form and uses a the Dice's coefficient algorithm to find the Semantic Clinical Drug: https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient

## Usage

`npm install atc2scd`

```js
const atc2scd = require("atc2scd");
atc2scd({
  atc: "N03AX12",
  strength: "100 mg",
  form: "Capsule, hard"
}).then(scd => {
  assert.deepEquals(scd, {
    rxcui: "853201",
    name: "24 HR quetiapine 50 MG Extended Release Oral Tablet",
    synonym: "quetiapine 50 MG 24 HR Extended Release Oral Tablet",
    tty: "SCD",
    language: "ENG",
    suppress: "N",
    umlscui: "C2702061",
    rating: 0.696969696969697
  });
});
```

## Documentation

- [Docs](docs)

## FlowCharts

> index.js

![index](index.js.svg)

> get-rxcui-by-type.js

![getRxCUIByType](lib/get-rxcui-by-type.js.svg)

> get-rxcui.js

![getRxCUI](lib/get-rxcui.js.svg)

> get-related.js

![getRelated](lib/get-related.js.svg)

> get-similar.js

![getSimilar](lib/get-similar.js.svg)

## Dependencies

Uses RXNorm REST API - https://rxnav.nlm.nih.gov/REST

## License

MIT
