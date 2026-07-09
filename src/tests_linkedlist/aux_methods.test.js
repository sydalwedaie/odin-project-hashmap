import { describe, test, expect } from "@jest/globals";
import { LinkedList } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test internal auxillary methods", () => {
  test("test print", () => {
    const list = LinkedList();
    expect(list.print()).toEqual({});
  });

  test("test initSample", () => {
    const expected = makeList(
      { key1: "value1" },
      { key2: "value2" },
      { key3: "value3" },
      { key4: "value4" },
    );
    const list = LinkedList();
    list.initSample();
    expect(list.print()).toEqual(expected);
  });

  test("test reset", () => {
    const list = LinkedList();
    list.initSample();
    list.clear();
    expect(list.print()).toEqual({});
  });
});
