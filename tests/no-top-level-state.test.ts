// SPDX-License-Identifier: ISC

import { RuleTester } from "eslint";

import { trimTestCases } from "./helpers.ts";
import { noTopLevelState } from "../src/rules/no-top-level-state.ts";

const valid: RuleTester.ValidTestCase[] = [
  {
    code: `
        function f() {
          const regexpNoFlags = /bar/;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpDotAll = /bar/s;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpGlobal = /bar/g;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpHasIndices = /bar/d;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpIgnoreCase = /bar/i;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpMultiline = /bar/m;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpSticky = /bar/y;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpUnicode = /bar/u;
        }
      `,
  },
  {
    code: `
        function f() {
          const regexpUnicodeSets = /bar/v;
        }
      `,
  },
  { code: `const b1 = true;` },
  { code: `const b2 = false;` },
  { code: `const n1 = 42;` },
  { code: `const n2 = 3.14;` },
  { code: `const n3 = 9001n;` },
  { code: `const str1 = "foobar";` },
  { code: `const str2 = 'foobar';` },
  { code: `const str3 = \`foobar\`;` },
  { code: `const regexpNoFlags = /bar/;` },
  { code: `const regexpDotAll = /bar/s;` },
  { code: `const regexpHasIndices = /bar/d;` },
  { code: `const regexpIgnoreCase = /bar/i;` },
  { code: `const regexpMultiline = /bar/m;` },
  { code: `const regexpUnicode = /bar/u;` },
  { code: `const regexpUnicodeSets = /bar/v;` },
];

const invalid: RuleTester.InvalidTestCase[] = [
  {
    code: `
        const regexpGlobal = /foobar/g;
      `,
    errors: [
      {
        messageId: "0",
        line: 1,
        column: 22,
        endLine: 1,
        endColumn: 31,
      },
    ],
  },
  {
    code: `
        const regexpSticky = /foobar/y;
      `,
    errors: [
      {
        messageId: "0",
        line: 1,
        column: 22,
        endLine: 1,
        endColumn: 31,
      },
    ],
  },
];

new RuleTester().run("no-top-level-state", noTopLevelState, {
  valid: valid.map(trimTestCases),
  invalid: invalid.map(trimTestCases),
});
