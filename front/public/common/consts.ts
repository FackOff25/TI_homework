const protocol = {
    http: 'http://',
    https: 'https://'
}
export const BaseUrl = '127.0.0.1';

export const BackendUrl = protocol.https + BaseUrl + ':8080';
//export const BackendUrl = protocol.https + BaseUrl + ':8080';
export const FrontUrl = protocol.https + BaseUrl;
//export const FrontUrl = protocol.https + BaseUrl;

export const APIurl = BackendUrl + '/api/v1';

export const ResponseErrors = {
    emailInvalid: "invalid email",
    loginInvalid: "invalid login",
    passwordInvalid: "invalid password",
    emailConflict: "email exists",
    loginConflict: "login exists",
    wrongAuth: "wrong email or password",
}

export const SubscribeErrors = {
    notAuth: "no auth",
    something: "something happened",
}

export const API = {
    root: /^$/,
    feedPage: /feed$/,
    settingsPage: /settings$/,
    articlePage: /article\/([0-9]+)(\?comments)?$/,
    categoryPage: /category\/(.+)$/,
    authorPage: /author\/(.+)$/,
    newArticlePage: /new_article$/,
    articleEditPage: /article\/([0-9]+)\/edit$/,
    searchPage: /search(\/([^\/]+))?(\/publisher\/([^\/]+))?(\/tags\/(.+))?$/,
}

export const APIStrings = {
    root: () => {return ''},
    feedPage: () => {return '/feed'},
    settingsPage: () => {return '/settings'},
    articlePage: (id: number, comments: boolean) => {
        if (comments){
            return '/article/' + id + '?comments';
        }
        return '/article/' + id;
    },
    categoryPage: (name: string) => {return '/category/' + name},
    authorPage: (login: string) => {return '/author/' + login},
    newArticlePage: () => {return '/new_article'},
    articleEditPage: (id: number) => {return '/article/' + id + '/edit/'},
}

export const CommentaryParent = {
    article: "article",
    commentary: "commentary",
}

//костыль т.к. на беке пока нет поля с аватарками категорий в бд.
//TODO: Добавить в бд поле и избавиться от этого убожества
export const categoryCoverFolder = (categoryName: string): string => {
    let path = '/static/img/category/';
    switch (categoryName){
        case 'Финансы':
            path += 'finances';
            break;
        case 'Право':
            path += 'right';
            break;
        case 'Соцсети':
            path += 'socMedia';
            break;
        case 'Политика':
            path += 'politics';
            break;
        case 'Маркетинг':
            path += 'marketing';
            break;
        case 'Видео':
            path += 'video';
            break;
        case 'Программирование':
            path += 'programming';
            break;
        case 'Сервисы':
            path += 'services';
            break;
        case 'Карьера':
            path += 'career';
            break;
        case 'Вопросы':
            path += 'questions';
            break;
        default:
            path += '';
            break;
    }
    path += '/cover.jpg';
    return path;
}
