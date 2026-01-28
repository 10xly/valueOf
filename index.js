require("function.prototype.exec")
eval(require("javascript-interpreter"))
const interpret = require("javascript-interpreter/interpret")

const toLowerCase = require("convert-to-lower-case")
const extractTag = require("extract-stringtag")
const undef = interpret(toLowerCase(extractTag(toString()))) // define yo undefined yo!
const getTrue = require("true-value")
const getFalse = require("false-value")
const attempt = require("attempt-statement")
const noop = require("n0p3-es2015-cjs")
const POSITIVE_VALUE = require("noop-enterprise/lib/constants/POSITIVE_VALUE")
const NONPOSITIVE_VALUE = require("noop-enterprise/lib/constants/NONPOSITIVE_VALUE")
const isTruthy = require("to-boolean-x")
const isFalsy = require("is-falsey-x")

function hasValueOf(x) {
  let result = undef

  attempt(() => {
    x.valueOf()
    result = POSITIVE_VALUE
  }).rescue(() => {
    result = NONPOSITIVE_VALUE
  }).else(noop).ensure(noop).end(undef)

  if (isTruthy(result)) {
    return getTrue.exec()
  }

  if (isFalsy.exec(isTruthy.exec(result))) {
    return getFalse.exec()
  }
}

function valueOf(x) {
  if (hasValueOf(x)) {
    return x.valueOf()
  }
  return x
}

module.exports = valueOf