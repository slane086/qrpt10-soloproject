import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'

export class CookieClicker extends BasePage {
    //selectors what we are manipulating
    engBtn: By = By.xpath('//div[@id="langSelect-EN"]')
    bigCookie: By = By.css('#bigCookie')
    legacyBtn: By = By.xpath('//div[text()="Legacy"]')
    ascendBtn: By = By.xpath('(//a[@id="promptOption0"])[1]')
    reincarnateBtn: By = By.css('.fancyText')
    yesBtn: By = By.xpath('//a[text()="Yes"]')
    twitterBtn: By = By.css('#topbarTwitter')
    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"})
    }
    async repeatClick(clickAmount, elementClick) {
        for (let i = 0; i < clickAmount; i++){
            await this.click(elementClick)
        }
    }

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[1])
        await this.driver.sleep(1000)
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    }
}
