'use struct'

const parser = require('./parser')
const { Scope } = require('./scope')
const types = require('./types')

const TYPE_MAP = {
  char: types.char,
  short: types.short,
  int: types.int,
  long: types.long
}

class Ctypes {
  constructor () {
    this._parser = parser
    this._scope = new Scope()
  }

  parse (code) {
    const list = this._parser.parse(code)

    list.compile(this._scope);
  }

  new (code) {
    const type = this._getType(code)

    return new type()
  }

  _getType (type) {
    // basetype
    const typeCls = TYPE_MAP[type]
    if (typeCls) {
      return typeCls
    // TODO: use regex
    } else if (type.trim().startsWith('struct ')) {
      return this._structType(type.split(' ')[1])
    } else {
      throw new Error(`Unkonw type '${type}'`)
    }
  }

  _structType (name) {
    const s = this._scope.get(name)
    const arg = s.options.fields.map(field =>
      [ field.name, this._getType(field.type) ])

    return class extends types.struct {
      static get fields () {
        return arg
      }
    }
  }
}

module.exports = Ctypes
