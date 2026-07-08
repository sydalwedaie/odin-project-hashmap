import { describe, test, expect } from "@jest/globals";
import { LinkedList, Node } from "../linkedlist.js";
import { makeList } from "../helpers.js";

describe("Test findLink", () => {
  const list = LinkedList();
  afterEach(() => {
    list.clear();
  });

  test("test on empty list", () => {
    const expected = null;
    expect(list.findLink("key")).toEqual(expected);
  });

  test("test non-existing key", () => {
    const expected = null;
    list.initSample();
    expect(list.findLink("key0")).toEqual(expected);
  });

  test("test existing key at index 0", () => {
    const expected = { key1: "value1" };
    list.initSample();
    expect(list.findLink("key1")).toEqual(expected);
  });

  test("test existing key at index 1", () => {
    const expected = { key2: "value2" };
    list.initSample();
    expect(list.findLink("key2")).toEqual(expected);
  });

  test("test existing key at last index", () => {
    const expected = { key4: "value4" };
    list.initSample();
    expect(list.findLink("key4")).toEqual(expected);
  });
});
