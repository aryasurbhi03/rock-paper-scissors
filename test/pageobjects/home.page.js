import { $ } from '@wdio/globals';

/**
 * 
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('//h1[contains(text(),"Rock Paper Scissors")]');
    }

    async open () {
        await browser.url('/'); // Replace with the actual URL of your login page
    }
}

export default new HomePage();
