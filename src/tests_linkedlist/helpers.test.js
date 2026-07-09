import { describe, test, expect } from "@jest/globals";
import { makeList } from "../helpers.js";

describe("Test helper functions", () => {
  test("test makeList with one entry", () => {
    const expected = { entry: { key1: "value1" }, next: null };
    expect(makeList({ key1: "value1" })).toEqual(expected);
  });

  test("test makeList with two entries", () => {
    const expected = {
      entry: { key1: "value1" },
      next: { entry: { key2: "value2" }, next: null },
    };
    expect(makeList({ key1: "value1" }, { key2: "value2" })).toEqual(expected);
  });

  test("test makeList with many entries", () => {
    const expected = {
      entry: { key1: "value1" },
      next: {
        entry: { key2: "value2" },
        next: {
          entry: { key3: "value3" },
          next: {
            entry: { key4: "value4" },
            next: null,
          },
        },
      },
    };

    expect(
      makeList(
        { key1: "value1" },
        { key2: "value2" },
        { key3: "value3" },
        { key4: "value4" },
      ),
    ).toEqual(expected);
  });
});
