import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test prepend", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = makeList("prepend");
    list.prepend("prepend");
    expect(list.getList()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = makeList("prepend", 1);

    list.append(1);
    list.prepend("prepend");

    expect(list.getList()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = makeList("prepend", 1, 2, 3, 4);

    list.initSample();
    list.prepend("prepend");
    expect(list.getList()).toEqual(expected);
  });
});
