'use struct'

const parser = require('./parser')

const list = parser.parse(`
  struct point {
    int x;
    int y;
  };
`)

console.log(list.toString())
