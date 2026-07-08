import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe.skip("Test findIndex", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = -1;
    expect(list.findIndex("whatever")).toBe(expected);
  });

  test("test non-existing value", () => {
    const expected = -1;
    list.initSample();
    expect(list.findIndex("whatever")).toBe(expected);
  });

  test("test existing value at index 0", () => {
    const expected = 0;
    list.initSample();
    expect(list.findIndex(1)).toBe(expected);
  });

  test("test existing value at index 1", () => {
    const expected = 1;
    list.initSample();
    expect(list.findIndex(2)).toBe(expected);
  });

  test("test existing value at last index", () => {
    const expected = 3;
    list.initSample();
    expect(list.findIndex(4)).toBe(expected);
  });
});
