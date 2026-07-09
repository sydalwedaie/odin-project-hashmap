import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap, makeList } from "../helpers.js";

describe("Test get", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = null;
    expect(hash.get("key x")).toBe(expected);
  });

  test("test non-existing key", () => {
    const expected = null;
    loadSampleHashmap(hash);
    expect(hash.get("key x")).toBe(expected);
  });

  test("test existing key", () => {
    const expected = "yellow";
    loadSampleHashmap(hash);
    expect(hash.get("banana")).toBe(expected);
  });

  test("test existing key", () => {
    const expected = "purple";
    loadSampleHashmap(hash);
    expect(hash.get("grape")).toBe(expected);
  });
});
