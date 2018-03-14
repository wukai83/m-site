import { environment } from '../../../environments/environment';

export class Const {
    static readonly API_SERVER: string = 'http://localhost:3000';

    static readonly API_URI = {
        Login: `${Const.API_SERVER}/login`
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
