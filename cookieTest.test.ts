import { CookieClicker } from "./cookiePage";
const cookie = new CookieClicker()

describe('Cookie Clicking Solo Project', () => {
    test('Can it click the cookie, ascend and switch tabs', async () => {
        await cookie.navigate()
        await cookie.click(cookie.engBtn)
        await cookie.driver.sleep(3000)
        await cookie.repeatClick(200, cookie.bigCookie)
        await cookie.driver.sleep(3000)
        await cookie.click(cookie.legacyBtn)
        await cookie.click(cookie.ascendBtn)
        await cookie.driver.sleep(2000)
        await cookie.click(cookie.reincarnateBtn)
        await cookie.click(cookie.yesBtn)
        await cookie.repeatClick(100, cookie.bigCookie)
        await cookie.click(cookie.twitterBtn)
        await cookie.tabSwitch()
        await cookie.repeatClick(5, cookie.bigCookie)
        await cookie.driver.quit()
    })
})