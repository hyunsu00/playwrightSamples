package playwrightSamples;

import com.microsoft.playwright.*;
import java.nio.file.Paths;

public class playwrightSample03 {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch();
      Page page = browser.newPage();
      page.navigate("http://naver.com/");
      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("naver.png")));
    }
  }
}
