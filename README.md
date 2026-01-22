# @resolve-es/valueof
Returns `x.valueOf()` if `x.valueOf` exists, otherwise returns `x`.

## Installation
```bash
npm install @resolve-es/valueof
```

## Usage
```js
const valueOf = require("@resolve-es/valueof")

const str = new String("Wow!")
console.log(typeof valueOf(str)) // "string"

// Handling primitives
console.log(valueOf(42)) // 42

// Complex objects without valueOf
console.log(valueOf({ name: "John Doe" })) // { name: 'John Doe' }
```