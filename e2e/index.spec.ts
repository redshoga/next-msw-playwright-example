import { test, expect } from "@playwright/test";

test.describe("index page", () => {
  test("'default response' should be displayed", async ({ page }) => {
    await page.goto("http://localhost:3000");
    const button = page.getByText("call api");
    await button.click();
    await expect(page.getByText("default response")).toBeVisible();
  });

  test("'hoge response' should be displayed", async ({ page }) => {
    await page.goto("http://localhost:3000#pattern_hoge");
    const button = page.getByText("call api");
    await button.click();
    await expect(page.getByText("hoge response")).toBeVisible();
  });

  test("'Request failed with status code 404' should be displayed", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000#pattern_404");
    const button = page.getByText("call api");
    await button.click();
    await expect(
      page.getByText("Request failed with status code 404")
    ).toBeVisible();
  });

  test("'Request failed with status code 500' should be displayed", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000#pattern_500");
    const button = page.getByText("call api");
    await button.click();
    await expect(
      page.getByText("Request failed with status code 500")
    ).toBeVisible();
  });
});
