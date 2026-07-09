import { describe, test, expect, afterEach } from "@jest/globals";
import { HashMap } from "../hashmap.js";
import { makeList } from "../helpers.js";

describe("Test set", () => {
  const hash = HashMap();
  afterEach(() => {
    hash.clear();
  });

  test("test set overriding logic", () => {
    const expected = [
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
      makeList({ Carlos: "I am the new value." }),
      makeList(),
      makeList(),
      makeList(),
    ];

    hash.set("Carlos", "I am the old value.");
    hash.set("Carlos", "I am the new value.");

    expect(hash.getHashmap()).toEqual(expected);
  });

  test("test set collision logic", () => {
    const expected = [
      makeList(),
      makeList(),
      makeList(),
      makeList({ Sita: "value for Sita" }, { Rama: "value for Rama" }),
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

    hash.set("Rama", "value for Rama");
    hash.set("Sita", "value for Sita");

    expect(hash.getHashmap()).toEqual(expected);
  });
});
