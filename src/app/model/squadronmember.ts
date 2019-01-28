import { Victory } from './victory';

export class SquadronMember {
    serialNumber: number;
    rank: string;
    name: string;
    victories: Victory[];
    victoryCount: number;

    constructor() {
        this.serialNumber = 0;
        this.rank = '';
        this.name = '';
        this.victories = [];
        this.victoryCount = 0;
    }
}
