'use strict'

const BoolType = require('./bool')
const CharType = require('./char').CharType
const UCharType = require('./char').UCharType
const ShortType = require('./short').ShortType
const UShortType = require('./short').UShortType
const IntType = require('./int').IntType
const UIntType = require('./int').UIntType
const LongType = require('./long').LongType
const ULongType = require('./long').ULongType
const LongLongType = require('./longlong').LongLongType
const ULongLongType = require('./longlong').ULongLongType
const FloatType = require('./float').FloatType
const DoubleType = require('./double').DoubleType
const SSizeType = require('./size_t').SSizeType
const SizeType = require('./size_t').SizeType

const Int8Type = require('./stdint').Int8Type
const UInt8Type = require('./stdint').UInt8Type
const Int16Type = require('./stdint').Int16Type
const UInt16Type = require('./stdint').UInt16Type
const Int32Type = require('./stdint').Int32Type
const UInt32Type = require('./stdint').UInt32Type
const Int64Type = require('./stdint').Int64Type
const UInt64Type = require('./stdint').UInt64Type

const StructType = require('./struct').StructType
const UnionType = require('./union').UnionType

module.exports = {
  bool: BoolType,
  char: CharType,
  uchar: UCharType,
  short: ShortType,
  ushort: UShortType,
  int: IntType,
  uint: UIntType,
  long: LongType,
  ulong: ULongType,
  longlong: LongLongType,
  ulonglong: ULongLongType,
  float: FloatType,
  double: DoubleType,
  size_t: SizeType,
  ssize_t: SSizeType,

  int8_t: Int8Type,
  uint8_t: UInt8Type,
  int16_t: Int16Type,
  uint16_t: UInt16Type,
  int32_t: Int32Type,
  uint32_t: UInt32Type,
  int64_t: Int64Type,
  uint64_t: UInt64Type,

  struct: StructType,
  union: UnionType
}
