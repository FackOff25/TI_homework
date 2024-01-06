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
// @ts-expect-error TS(2304): Cannot find name 'Handlebars'.
Handlebars.registerHelper('isEqual', function (value1, value2) {
    return JSON.stringify(value1) === JSON.stringify(value2);
  });
    