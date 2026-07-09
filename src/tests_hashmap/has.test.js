import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test has", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expected = false;
    expect(hash.has("key x")).toBe(expected);
  });

  test("test non-existing key", () => {
    const expected = false;
    loadSampleHashmap(hash);
    expect(hash.has("key x")).toBe(expected);
  });

  test("test existing key", () => {
    const expected = true;
    loadSampleHashmap(hash);
    expect(hash.has("banana")).toBe(expected);
  });

  test("test existing key", () => {
    const expected = true;
    loadSampleHashmap(hash);
    expect(hash.has("grape")).toBe(expected);
  });
});
