'use struct'

const TYPE = {
  INT: 'int',
  STRUCT: 'struct'
}

class Scope {
  constructor () {
    this.types = {}
  }

  add (name, type, options) {
    this.types[name] = { type, options }
  }

  get (name) {
    return this.types[name]
  }
}

exports.Scope = Scope
exports.TYPE = TYPE
