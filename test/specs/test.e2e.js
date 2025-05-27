import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page'


describe('My Login application', () => {
    it('should load Rock Paper Scissors Game ', async () => {
        await HomePage.open();
        await expect(HomePage.title).toBeDisplayed();
    })
})

