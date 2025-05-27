import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page'


describe('My Rock Paper Scissors application', () => {
    it('should load Rock Paper Scissors Home Page ', async () => {
        await HomePage.open();
        await expect(HomePage.title).toBeDisplayed();
        await expect(HomePage.title).toHaveTextContaining('Rock Paper Scissors');
    })
})

