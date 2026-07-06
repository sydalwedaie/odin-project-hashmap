import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test append", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = makeList("append");

    list.append("append");
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = makeList(1, "append");

    list.append(1);
    list.append("append");
    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = makeList(1, 2, 3, 4, "append");

    list.initSample();
    list.append("append");
    expect(list.getList()).toEqual(expected);
  });
});
