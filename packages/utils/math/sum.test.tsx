import { describe } from "node:test";
import sum from "./sum";

describe("sum", () => {
  test("quando sum receber os parâmetros 1 e 1, retornar 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
