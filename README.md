# atc2scd

This module takes an ATC Code, Strength and Form and uses a the Dice's coefficient algorithm to find the Semantic Clinical Drug: https://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient

## Usage

`npm install atc2scd`

``` js
const atc2scd = require('atc2scd')
atc2scd({
  atc: 'N03AX12',
  strength: '100 mg',
  form: 'Capsule, hard'
}).then(scd => {
  assert.deepEquals(scd, {
    language: "ENG",
    name: "gabapentin 100 MG Oral Capsule",
    tty: "SCD",
    rxcui: "310430",
    suppress: "N",
    synonym: "",
    umlscui: "C0977057"
  })
})
```

## Dependencies

Uses RXNorm REST API - https://rxnav.nlm.nih.gov/REST

## License 

MIT
