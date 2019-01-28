import { HumanPilot } from './humanpilot';

export class Context 
{
    user: string;
    isLoggedIn: boolean;
    selectedHumanPilot: HumanPilot;

    static context: Context = new Context();

    constructor() {
        this.user = '';
        this.isLoggedIn = false;
        this.selectedHumanPilot = undefined;
    }
}

