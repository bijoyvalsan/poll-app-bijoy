import { formatDate } from "./date";

describe("date service", () => {
  it("test date service ", () => {
    const transformedDate = formatDate("2021-05-24T15:45:17.552Z");
    expect(transformedDate).toBe("24/05/2021 17:45");
  });
});
