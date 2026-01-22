const { expect } = require("chai")
const valueOf = require("./index")

describe("valueOf() - 10xly implementation", () => {
  it("should return the result of exec() if hasValueOf is POSITIVE_VALUE", () => {
    const mockObj = {
      valueOf: function() {
        return "success"
      }
    }

    const result = valueOf(mockObj)
    expect(result).to.equal("success")
  })

  it("should return the input itself if hasValueOf is NONPOSITIVE_VALUE", () => {
    const primitive = "just a string"
    const result = valueOf(primitive)

    expect(result).to.equal("just a string")
  })
  
  it("should handle objects that throw on valueOf access", () => {
    const explodingObj = {
      get valueOf() {
        throw new Error("Explosion")
      }
    }

    // attempt().rescue() logic should catch this and return the object itself
    const result = valueOf(explodingObj)
    expect(result).to.equal(explodingObj)
  })
})