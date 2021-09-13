import { firstUpperCase as fup } from "./helpers";

describe("firstUppercase function", () => {
  test("1", () => expect(fup("non_free", "_", " ")).toBe("Non Free"));
  test("2", () => expect(fup("N", "_", "")).toBe("N"));
  test("3", () => expect(fup("n")).toBe("N"));
  test("4", () => expect(fup("")).toBe(""));
  test("5", () => expect(fup("    ", " ", "_")).toBe("____"));
});
