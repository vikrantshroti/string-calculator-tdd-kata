import stringCalculator from "./string-calculator";

describe("string calcualtor test cases", () => {
  test("passing empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("passing: only 1 argument", () => {
    expect(stringCalculator("1")).toBe(0);
  });

  test("passing numbers: 1,2,3", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });

  test("passing regex: 1\\n2,3", () => {
    expect(stringCalculator("1\n2,3")).toBe(6);
  });

  test("passing regex: //;\\n1;2;3", () => {
    expect(stringCalculator("//;\n1;2;3")).toBe(6);
  });

  test("passing regex: //[**]\\n1**2**3", () => {
    expect(stringCalculator("//[**]\n1**2**3")).toBe(6);
  });

  test("passing regex: //[*][%]\\n1*2%3", () => {
    expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
  });

  test("passing regex: //[..][%%]\\n1..2%%3", () => {
    expect(stringCalculator("//[..][%%]\n1..2%%3")).toBe(6);
  });

  test("passing negative numbers", () => {
    expect(() => stringCalculator("-1,-3,2")).toThrow();
  });
});
