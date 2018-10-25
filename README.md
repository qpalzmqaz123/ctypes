# ctypes

Ctypes is a library for converting javascript and c data types to each other. It's easy to use because it parses the c code.

## Example

```javascript
const Ctypes = require('ctypes')

const ctypes = new Ctypes()

ctypes.parse(`
  struct point {
    int x;
    int y;
  };
`)

const num = ctypes.new('int')
const a = ctypes.new('struct point')

num.$value = 123

a.x.$value = 1
a.y.$value = 2

console.log(num.$buffer) // <Buffer 7b 00 00 00>
console.log(a.$buffer) // <Buffer 01 00 00 00 02 00 00 00>
```

To be continued...
