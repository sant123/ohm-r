# Ohm-r
¿Do you know how many `ohms` and `tolerance` have your resistance? With ohm-r you just have to provide the colors and you are done!

## Installation

```sh
$ npm install ohm-r -g
```

## Quick Start

The quickest way to get started with ohm-r is providing the colors of your resistance like:

```bash
$ ohm-r yellow violet orange gold
```

You will get the following output:

```sh
Ohms: 47,000
Tolerance:
    Min: 44,650
    Max: 49,350
```

## Module

You can use it as a module like:

```javascript
    var ohm = require("ohm-r");

    var result = ohm.calc("yellow", "violet", "orange", "gold");

    console.log(result); //{ ohms : 47000, tolerance : { min : 44650, max : 49350 } }
```

## Typescript

Ohm-r has support with Typescript, that's why you can get intellisense and autocomple for colors like:

```javascript
    var ohm = require("ohm-r");

    var result = ohm.calc(ohm.colors.YELLOW, ohm.colors.VIOLET, ohm.colors.ORANGE, ohm.colors.GOLD);

    console.log(result); //{ ohms : 47000, tolerance : { min : 44650, max : 49350 } }
```

## Validation

* The `calc` method requires minimum 4 colors, otherwise it will raise an exception.

```
Error: The resistance must have at least 4 colors.
```

* An invalid color will raise an exception too.

```javascript
    var ohm = require("ohm-r");

    var result = ohm.calc("pink", ohm.colors.VIOLET, ohm.colors.ORANGE, ohm.colors.GOLD);
```

```
Error: The color "pink" does not exist.
```

## Inspiration

This module is inspirated by the common mistake of forgetting the value of the colors in a resistance.

## License

[MIT](LICENSE)
