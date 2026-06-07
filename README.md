# eslint-plugin-no-top

Disallow side effects at the top level of files.

Based on [`@ericcornelissen/eslint-plugin-top`](https://github.com/ericcornelissen/eslint-plugin-top).

## Installation

First, install [ESLint](https://eslint.org/):

```shell
npm install eslint --save-dev
```

Then install this plugin:

```shell
npm install eslint-plugin-no-top --save-dev
```

## Usage

### Flat config (ESLint v9+)

```javascript
import noTop from "eslint-plugin-no-top";

export default [
  {
    plugins: { "no-top": noTop },
    rules: {
      "no-top/no-top-level-side-effects": "error",
      "no-top/no-top-level-state": "error",
      "no-top/no-top-level-variables": "error",
    },
  },
];
```

The plugin key (`no-top` in the example) must match the prefix used in rule names.

## Rules

- [`no-top-level-side-effects`](https://github.com/ericcornelissen/eslint-plugin-top/blob/main/docs/rules/no-top-level-side-effects.md) — disallow top-level side effects
- [`no-top-level-state`](https://github.com/ericcornelissen/eslint-plugin-top/blob/main/docs/rules/no-top-level-state.md) — disallow stateful values (e.g. regexes with `g`/`y` flags) at the top level
- [`no-top-level-variables`](https://github.com/ericcornelissen/eslint-plugin-top/blob/main/docs/rules/no-top-level-variables.md) — disallow top-level variables

## Development

```bash
vp install
vp test
vp pack
vp check
```

## License

[ISC](./LICENSE)
