const test = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("../src/index");

test("BenefitCheck should return the correct message", () => {
    assert.strictEqual(
        getMessage(),
        "BenefitCheck is running!"
    );
});
