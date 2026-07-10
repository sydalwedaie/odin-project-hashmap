import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test keys", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = [];
    expect(hash.keys()).toEqual(expected);
  });

  test("test on single entry hashmap", () => {
    const expected = ["key"];
    hash.set("key", "value");
    expect(hash.keys()).toEqual(expected);
  });

  test("test on full capacity hashmap", () => {
    const expected = [
      "elephant",
      "carrot",
      "frog",
      "banana",
      "apple",
      "hat",
      "grape",
      "lion",
      "dog",
      "ice cream",
      "jacket",
      "kite",
    ];
    loadSampleHashmap(hash);
    expect(hash.keys()).toEqual(expected);
  });
});
