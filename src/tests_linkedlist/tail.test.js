import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test tail", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = undefined;
    expect(list.tail()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = 1;
    list.append(1);
    expect(list.tail()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = 4;
    list.initSample();
    expect(list.tail()).toEqual(expected);
  });
});
