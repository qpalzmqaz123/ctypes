'use strict'

const fs = require('fs')
const path = require('path')
const Parser = require('jison').Parser
const ast = require('./ast')

const text = fs.readFileSync(path.resolve(path.dirname(__filename), 'grammar.jison'), 'utf8')
const parser = new Parser(text)

/*
const parserSource = parser.generate()
fs.writeFileSync('/tmp/parser-out.js', parserSource)
*/

parser.yy = { ast }

module.exports = parser
