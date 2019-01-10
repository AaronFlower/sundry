## Jest With Babel7

1. Create an empty project.

```
npm init -y
```

2. Add Jest and Babel .

```bash
yarn add --dev jest
yarn add --dev babel-jest @babel/core @babel/cli regenerator-runtime babel-core@^7.0.0-bridge.0
```

** Warning **: don't miss `babel-core@^7.0.0-bridge.0`

3. Config Babel

Because Babel 7 use Browserslist to transform code, so we can specify the browser query in `package.json`.

```json
{
    "browserslist": [
        "last 2 chrome versions"
    ]
}
```
Then we create a `babel.config.js` to config the babel.

```javascript
module.exports = {
    presets: [
        "@babel/env"
    ],
    // You need this config. https://github.com/facebook/jest/issues/6229#issuecomment-450280779
    env: {
        test: {
          presets: [['@babel/preset-env']]
        }
    }
}
}
```

Because we will use `@babel/env` package, we should install it.
```bash
yarn add --dev @babel/preset-env
```

4. Add Demo code

Create a `sum.js`.

```javascript
let sum = (a, b) => a + b
export default sum
```

5. Add Test Code
Create a `sum.test.js`.

```javascript
import sum from './sum'

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
```

6. Check our target environments

```bash
npx browserslist
chrome 71
chrome 70
```

7. Check our babel works

```javascript
$ npx babel sum.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

let sum = (a, b) => a + b;

var _default = sum;
exports.default = _default;

```

8. At last, execute our test
```bash
jest
 PASS  ./sum.test.js
  ✓ add 1 + 2 to equal 3 (7ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.189s
Ran all test suites.
```



