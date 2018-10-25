'use strict'

const { TYPE } = require('./scope')

class Tree {
  toString (level = 0) {
    return '  '.repeat(level) + this.constructor.name + ' | '
  }

  compile (scope) {
  }
}

class List extends Tree {
  constructor () {
    super()

    this._nodes = []
  }

  push (node) {
    if (node instanceof Node) {
      this._nodes.push(node)
    }

    return this;
  }

  toString (level = 0) {
    return (['  '.repeat(level) + super.toString()])
      .concat(this._nodes.map(v => v.toString(level + 1)))
      .join('\n')
  }

  compile (scope) {
    this._nodes.forEach(node => {
      scope.add(...node.compile())
    })
  }
}

class Node extends Tree {
}

class Variable extends Node {
  constructor (type, name) {
    super()

    this.type = type
    this.name = name
  }

  toString (level = 0) {
    return super.toString(level) + `type: ${this.type}, name: ${this.name}`
  }

  compile () {
    return {
      name: this.name,
      type: this.type
    }
  }
}

class VariableList extends Node {
  constructor () {
    super()

    this._list = []
  }

  push (variable) {
    if (variable instanceof Variable) {
      this._list.push(variable);
    }

    return this
  }

  toString (level = 0) {
    return (['  '.repeat(level) + super.toString()])
      .concat(this._list.map(v => v.toString(level + 1)))
      .join('\n')
  }

  compile () {
    return this._list.map(v => v.compile())
  }
}

class Struct extends Node {
  constructor (name, variableList) {
    super()

    this.name = name
    this.variableList = variableList
  }

  toString (level = 0) {
    let arr = [
      super.toString(level),
      '  '.repeat(level + 1) + `name: ${this.name}`,
      '  '.repeat(level + 1) + `variableList: \n${this.variableList.toString(level + 2)}`,
    ]

    return arr.join('\n');
  }

  compile () {
    return [
      this.name,
      TYPE.STRUCT,
      { fields: this.variableList.compile() }
    ]
  }
}

module.exports = {
  Tree,
  List,
  Node,
  Variable,
  VariableList,
  Struct
}
