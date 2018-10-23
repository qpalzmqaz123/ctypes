'use struct'

/*
const struct = require('cstruct')

struct.parse(`
  typedef struct {
    int x;
    int y;
  } point;
`)

const a = struct.new('int')
const b = struct.new('point')
const c = struct.new('int [10]')
const d = struct.new('int []')

a.$value = 10
b.x.$value = 20
c[0].$value = 100
*/

const ctypes = require('../index')
