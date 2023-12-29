/* global Handlebars */

import {PageLoaders} from "./modules/pageLoaders.js";
import Router from "./modules/router.js";
import Page from "./pages/_basic/page";

const router = new Router({
    mode: 'history',
    root: ''
});

let openedPage: Page;

router
    .add('', () => {
        if (openedPage !== undefined) {
            openedPage.destroy();
        }
        openedPage = PageLoaders.mainPage();
    })
    