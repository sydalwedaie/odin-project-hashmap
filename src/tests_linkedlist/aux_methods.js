import { describe, test, expect } from "@jest/globals";
import { LinkedList } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test internal auxillary methods", () => {
  test("test getList", () => {
    const list = LinkedList();
    expect(list.getList()).toEqual({});
  });

  test("test initSample", () => {
    const expected = makeList(1, 2, 3, 4);
    const list = LinkedList();
    list.initSample();
    expect(list.getList()).toEqual(expected);
  });

  test("test reset", () => {
    const list = LinkedList();
    list.initSample();
    list.clear();
    expect(list.getList()).toEqual({});
  });
});
