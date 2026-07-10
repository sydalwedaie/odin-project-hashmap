import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test length", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = 0;
    expect(hash.length()).toBe(expected);
  });

  test("test on single entry hashmap", () => {
    const expected = 1;
    hash.set("key", "value");
    expect(hash.length()).toBe(expected);
  });

  test("test on full capacity hashmap", () => {
    const expected = 12;
    loadSampleHashmap(hash);
    expect(hash.length()).toBe(expected);
  });
});
