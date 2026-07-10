import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test entries", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = [];
    expect(hash.entries()).toEqual(expected);
  });

  test("test on single entry hashmap", () => {
    const expected = [["key", "value"]];
    hash.set("key", "value");
    expect(hash.entries()).toEqual(expected);
  });

  test("test on full capacity hashmap", () => {
    const expected = [
      ["elephant", "gray"],
      ["carrot", "orange"],
      ["frog", "green"],
      ["banana", "yellow"],
      ["apple", "red"],
      ["hat", "black"],
      ["grape", "purple"],
      ["lion", "golden"],
      ["dog", "brown"],
      ["ice cream", "white"],
      ["jacket", "blue"],
      ["kite", "pink"],
    ];
    loadSampleHashmap(hash);
    expect(hash.entries()).toEqual(expected);
  });
});
