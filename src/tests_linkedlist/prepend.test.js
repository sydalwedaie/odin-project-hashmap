import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test prepend", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = makeList({ key1: "value1" });
    list.prepend({ key1: "value1" });
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = makeList({ key0: "value0" }, { key1: "value1" });

    list.prepend({ key1: "value1" });
    list.prepend({ key0: "value0" });

    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = makeList(
      { key0: "value0" },
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
      { key4: "value4" },
    );

    list.initSample();
    list.prepend({ key0: "value0" });
    expect(list.getList()).toEqual(expected);
  });
});
