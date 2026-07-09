import { describe, test, expect } from "@jest/globals";
import { LinkedList } from "../linkedlist.js";

describe("Test entries", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = {};
    expect(list.entries()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = { key1: "value1" };
    list.prepend({ key1: "value1" });
    expect(list.entries()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
      key4: "value4",
    };

    list.initSample();
    expect(list.entries()).toEqual(expected);
  });
});
