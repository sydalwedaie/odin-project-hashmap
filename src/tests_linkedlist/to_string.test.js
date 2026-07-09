import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test toString", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = "-";
    expect(list.toString()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = "( key1: value1 ) -> null";
    list.prepend({ key1: "value1" });
    expect(list.toString()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected =
      "( key1: value1 ) -> ( key2: value2 ) -> ( key3: value3 ) -> ( key4: value4 ) -> null";
    list.initSample();
    expect(list.toString()).toEqual(expected);
  });
});
