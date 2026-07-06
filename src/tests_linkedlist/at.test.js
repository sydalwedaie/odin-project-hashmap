import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test at", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.at(2)).toEqual(expected);
  });

  test("test non-existing value", () => {
    const expected = undefined;
    list.append(1);
    expect(list.at(2)).toEqual(expected);
  });

  test("test existing value at index 0", () => {
    const expected = 1;
    list.initSample();
    expect(list.at(0)).toEqual(expected);
  });

  test("test existing value at index 1", () => {
    const expected = 2;
    list.initSample();
    expect(list.at(1)).toEqual(expected);
  });

  test("test existing value at last index", () => {
    const expected = 4;
    list.initSample();
    expect(list.at(4)).toEqual(expected);
  });
});
