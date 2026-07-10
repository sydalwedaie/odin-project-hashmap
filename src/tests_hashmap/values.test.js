import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test values", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = [];
    expect(hash.values()).toEqual(expected);
  });

  test("test on single entry hashmap", () => {
    const expected = ["value"];
    hash.set("key", "value");
    expect(hash.values()).toEqual(expected);
  });

  test("test on full capacity hashmap", () => {
    const expected = [
      "gray",
      "orange",
      "green",
      "yellow",
      "red",
      "black",
      "purple",
      "golden",
      "brown",
      "white",
      "blue",
      "pink",
    ];
    loadSampleHashmap(hash);
    expect(hash.values()).toEqual(expected);
  });
});
