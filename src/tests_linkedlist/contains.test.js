import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test contains", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = false;
    expect(list.contains("key")).toBe(expected);
  });

  test("test non-existing value", () => {
    const expected = false;
    list.initSample();
    expect(list.contains("value0")).toBe(expected);
  });

  test("test existing value at index 0", () => {
    const expected = true;
    list.initSample();
    expect(list.contains("key1")).toBe(expected);
  });

  test("test existing value at index 1", () => {
    const expected = true;
    list.initSample();
    expect(list.contains("key2")).toBe(expected);
  });

  test("test existing value at last index", () => {
    const expected = true;
    list.initSample();
    expect(list.contains("key4")).toBe(expected);
  });
});
