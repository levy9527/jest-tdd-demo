const isShellFile = require("../src/isShellFile");

test("isShellFile", () => {
  // 调用函数，期望它返回值为 true
  expect(isShellFile("bash.sh")).toBeTruthy();
});
