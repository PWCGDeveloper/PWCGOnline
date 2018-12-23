export class Context 
{
    user: string;
    isLoggedIn: boolean;

    static context: Context = new Context();

    constructor() {
        this.user = '';
        this.isLoggedIn = false;
    }
}

