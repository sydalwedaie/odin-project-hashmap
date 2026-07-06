import { describe, test, expect } from "@jest/globals";
import { makeList } from "../helpers.js";

describe("Test helper functions", () => {
  test("test makeList with one value", () => {
    const expected = { value: 1, next: null };
    expect(makeList(1)).toEqual(expected);
  });

  test("test makeList with two value", () => {
    const expected = { value: 1, next: { value: 2, next: null } };
    expect(makeList(1, 2)).toEqual(expected);
  });

  test("test makeList with many values", () => {
    const expected = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    };

    expect(makeList(1, 2, 3, 4)).toEqual(expected);
  });
});
