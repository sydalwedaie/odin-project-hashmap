import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test pop", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expectedValue = undefined;
    const expectedList = {};
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });

  test("test on single-node list", () => {
    const expectedValue = 1;
    const expectedList = {};
    list.append(1);
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });

  test("test on multi-node list", () => {
    const expectedValue = 1;
    const expectedList = makeList(2, 3, 4);

    list.initSample();
    expect(list.pop()).toEqual(expectedValue);
    expect(list.getList()).toEqual(expectedList);
  });
});
