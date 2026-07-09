import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test removeNode", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expectedReturn = false;
    const expectedList = {};
    expect(list.removeNode("key")).toEqual(expectedReturn);
    expect(list.print()).toEqual(expectedList);
  });

  test("test non-existing key", () => {
    const expectedReturn = false;
    const expectedList = makeList(
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
      { key4: "value4" },
    );

    list.initSample();
    expect(list.removeNode("key0")).toEqual(expectedReturn);
    expect(list.print()).toEqual(expectedList);
  });

  test("test existing key at index 0", () => {
    const expectedReturn = true;
    const expectedList = makeList(
      { key2: "value2" },
      { key3: "value3" },
      { key4: "value4" },
    );

    list.initSample();
    expect(list.removeNode("key1")).toEqual(expectedReturn);
    expect(list.print()).toEqual(expectedList);
  });

  test("test existing key at index 1", () => {
    const expectedReturn = true;
    const expectedList = makeList(
      { key1: "value1" },
      { key3: "value3" },
      { key4: "value4" },
    );

    list.initSample();
    expect(list.removeNode("key2")).toEqual(expectedReturn);
    expect(list.print()).toEqual(expectedList);
  });

  test("test existing key at last index", () => {
    const expectedReturn = true;
    const expectedList = makeList(
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
    );

    list.initSample();
    expect(list.removeNode("key4")).toEqual(expectedReturn);
    expect(list.print()).toEqual(expectedList);
  });
});
