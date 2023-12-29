import Main from "../pages/main/main.js";
import Page from "../pages/_basic/page";

const root = document.getElementsByTagName('body')[0];

export class PageLoaders {
    /**
     * Отрисовывает главную страницу
     */
    static mainPage(): Page {
        const page = new Main(root);
        page.render().then(() => {
            page.subscribe();
        });
        return page;
    }
}