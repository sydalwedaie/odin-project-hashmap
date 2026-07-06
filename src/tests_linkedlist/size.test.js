import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test size", () => {
  const list = LinkedList();
  test("test on empty list", () => {
    const expected = 0;
    expect(list.size()).toBe(expected);
  });

  test("test on single-node list", () => {
    const expected = 1;
    list.append(Node("single node"));
    expect(list.size()).toBe(expected);
  });

  test("test on multi-node list", () => {
    const expected = 4;
    list.initSample();
    expect(list.size()).toBe(expected);
  });
});
