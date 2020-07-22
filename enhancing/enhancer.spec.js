const enhancer = require("./enhancer.js");
// test away!

it("should run test true", function() {
  expect(true).toBe(true);
});

describe("enhacer.js", function() {
  // Repair test
  describe("repair()", function() {
    it("should return item durability as 100", function() {
      let item = {};
      const fixed = enhancer.repair(item);
      expect(fixed.durability).toBe(100);
    });
  });

  // Success tests
  describe("success()", function() {
    it("should enhance item if lvl is not 20 succeed", function() {
      let item = { name: "sword", enhancement: 2, durability: 50 };
      const enhanced = enhancer.succeed(item);
      expect(enhanced.enhancement).toBe(3);
    });
    it("should not enhance item if lvl is 20 succeed", function() {
      let item2 = { name: "sword", enhancement: 20, durability: 50 };
      expect(() => {
        enhancer.succeed(item2);
      }).toThrow();
    });
    it("should not change durability", function() {
      let item = { name: "sword", enhancement: 2, durability: 50 };
      const enhanced = enhancer.succeed(item);
      expect(enhanced.durability).toBe(50);
    });
  });

  // Fail Test
  describe("fail()", function() {
    it("If the items enhancement is less than 15, the durability of the item is decreased by 5.", function() {
      let item3 = { name: "sword", enhancement: 10, durability: 50 };
      const fails = enhancer.fail(item3);
      expect(fails.durability).toBe(45);
    });
    it("If the items enhancement is 15 or more, the durability of the item is decreased by 10", function() {
      let item4 = { name: "knife", enhancement: 15, durability: 50 };
      const fails2 = enhancer.fail(item4);
      expect(fails2.durability).toBe(40);
    });
    it("If the items enhancement is 15 or more, the durability of the item is decreased by 10", function() {
      let item4 = { name: "knife", enhancement: 17, durability: 50 };
      const fails2 = enhancer.fail(item4);
      expect(fails2.enhancement).toBe(16);
    });
  });
});
