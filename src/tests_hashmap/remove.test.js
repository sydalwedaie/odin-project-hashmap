import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { loadSampleHashmap, makeList } from "../helpers.js";

describe("Test remove", () => {
  const hash = HashMap();

  afterEach(() => {
    hash.clear();
  });

  test("test on empty hashmap", () => {
    const expectedReturn = false;
    const expectedHashmap = [
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
    ];
    expect(hash.remove("key x")).toEqual(expectedReturn);
    expect(hash.getHashmap()).toEqual(expectedHashmap);
  });

  test("test non-existing key", () => {
    const expectedReturn = false;
    const expectedHashmap = [
      makeList(),
      makeList({ elephant: "gray" }),
      makeList(),
      makeList({ carrot: "orange" }),
      makeList({ frog: "green" }),
      makeList({ banana: "yellow" }),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList({ apple: "red" }),
      makeList({ hat: "black" }, { grape: "purple" }),
      makeList({ lion: "golden" }, { dog: "brown" }),
      makeList({ "ice cream": "white" }),
      makeList({ jacket: "blue" }),
      makeList({ kite: "pink" }),
    ];
    loadSampleHashmap(hash);
    expect(hash.remove("key x")).toEqual(expectedReturn);
    expect(hash.getHashmap()).toEqual(expectedHashmap);
  });

  test("test existing key: apple should not exist", () => {
    const expectedReturn = true;
    const expectedHashmap = [
      makeList(),
      makeList({ elephant: "gray" }),
      makeList(),
      makeList({ carrot: "orange" }),
      makeList({ frog: "green" }),
      makeList({ banana: "yellow" }),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList({ hat: "black" }, { grape: "purple" }),
      makeList({ lion: "golden" }, { dog: "brown" }),
      makeList({ "ice cream": "white" }),
      makeList({ jacket: "blue" }),
      makeList({ kite: "pink" }),
    ];
    loadSampleHashmap(hash);
    expect(hash.remove("apple")).toEqual(expectedReturn);
    expect(hash.getHashmap()).toEqual(expectedHashmap);
  });

  test("test existing key: grape should not exist", () => {
    const expectedReturn = true;
    const expectedHashmap = [
      makeList(),
      makeList({ elephant: "gray" }),
      makeList(),
      makeList({ carrot: "orange" }),
      makeList({ frog: "green" }),
      makeList({ banana: "yellow" }),
      makeList(),
      makeList(),
      makeList(),
      makeList(),
      makeList({ apple: "red" }),
      makeList({ hat: "black" }),
      makeList({ lion: "golden" }, { dog: "brown" }),
      makeList({ "ice cream": "white" }),
      makeList({ jacket: "blue" }),
      makeList({ kite: "pink" }),
    ];
    loadSampleHashmap(hash);
    expect(hash.remove("grape")).toEqual(expectedReturn);
    expect(hash.getHashmap()).toEqual(expectedHashmap);
  });
});
