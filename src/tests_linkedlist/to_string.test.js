import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";

describe("Test toString", () => {
  const list = LinkedList();

  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = "";
    expect(list.toString()).toEqual(expected);
  });

  test("test on single-node list", () => {
    const expected = "( 1 ) -> null";
    list.append(1);
    expect(list.toString()).toEqual(expected);
  });

  test("test on multi-node list", () => {
    const expected = "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null";
    list.initSample();
    expect(list.toString()).toEqual(expected);
  });
});
