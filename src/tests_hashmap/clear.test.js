import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap, makeList } from "../helpers.js";

describe("Test clear", () => {
  const hash = HashMap();

  const expected = [
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
    makeList(),
  ];

  test("test on empty hashmap", () => {
    hash.clear();
    expect(hash.getHashmap()).toEqual(expected);
  });

  test("test on single entry hashmap", () => {
    hash.set("key", "value");
    hash.clear();
    expect(hash.getHashmap()).toEqual(expected);
  });

  test("test on full capacity hashmap", () => {
    loadSampleHashmap(hash);
    hash.clear();
    expect(hash.getHashmap()).toEqual(expected);
  });
});
