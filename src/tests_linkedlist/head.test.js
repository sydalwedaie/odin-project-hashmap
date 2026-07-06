import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test head", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.head()).toEqual(expected);
  });

  test("test on non-empty list", () => {
    const expected = 1;
    list.initSample();
    expect(list.head()).toEqual(expected);
  });
});
