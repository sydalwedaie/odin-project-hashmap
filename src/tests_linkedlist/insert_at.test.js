import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test insertAt", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test one value on empty list", () => {
    const expected = makeList("one value");
    list.insertAt(0, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on index 0", () => {
    const expected = makeList("one value", 1, 2, 3, 4);

    list.initSample();
    list.insertAt(0, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on index 1", () => {
    const expected = makeList(1, "one value", 2, 3, 4);

    list.initSample();
    list.insertAt(1, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test one value on last index", () => {
    const expected = makeList(1, 2, 3, 4, "one value");

    list.initSample();
    list.insertAt(4, "one value");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on empty list", () => {
    const expected = makeList("value 1", "value 2", "value 3");

    list.insertAt(0, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on index 0", () => {
    const expected = makeList("value 1", "value 2", "value 3", 1, 2, 3, 4);

    list.initSample();
    list.insertAt(0, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on index 1", () => {
    const expected = makeList(1, "value 1", "value 2", "value 3", 2, 3, 4);

    list.initSample();
    list.insertAt(1, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test many values on last index", () => {
    const expected = makeList(1, 2, 3, 4, "value 1", "value 2", "value 3");

    list.initSample();
    list.insertAt(4, "value 1", "value 2", "value 3");
    expect(list.getList()).toEqual(expected);
  });

  test("test out of bound index", () => {
    const expected = "Index out of bound.";
    list.initSample();

    expect(() => {
      list.insertAt(20, "out of bound");
    }).toThrow();
  });
});
