export class Const {
    static readonly SVC_PREFIX = 'api';

    static readonly API_URI = {
        Login: `${Const.SVC_PREFIX}/login`
    };

    static readonly PATH_URI = {
        Login: '/login',
        Main: '/main'
    };

    static readonly LANG = {
        JAPANESE: 'ja',
        CHINESE: 'zh'
    };
}
