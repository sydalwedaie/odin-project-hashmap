import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("test removeAt", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = {};
    list.removeAt(2);
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = {};
    list.append(1);
    list.removeAt(0);
    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = makeList(1, 2, 4);
    list.initSample();
    list.removeAt(2);
    expect(list.getList()).toEqual(expected);
  });

  test("test out of bound index", () => {
    list.initSample();
    expect(() => {
      list.removeAt(20);
    }).toThrow();
  });
});
