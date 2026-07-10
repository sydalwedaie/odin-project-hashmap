import { describe, test, expect } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap } from "../helpers.js";

describe("Test the grow functionality", () => {
  const hash = HashMap();
  loadSampleHashmap(hash);
  hash.set("moon", "silver");

  test("should show new capacity", () => {
    expect(hash.length()).toBe(13);
    expect(hash.getHashmap().length).toBe(32);
  });

  test("test overriding logic", () => {
    hash.set("kite", "not pink");
    expect(hash.get("kite")).toBe("not pink");
  });

  test("test collision logic", () => {
    hash.set("door", "lime");
    expect(hash.get("door")).toBe("lime");
  });

  test("test remove and has", () => {
    expect(hash.has("grape")).toBe(true);
    hash.remove("grape");
    expect(hash.has("grape")).toBe(false);
  });
});
