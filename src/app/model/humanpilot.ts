export class HumanPilot {
    username: string;
    campaignName: string;
    pilotName: string;
    pilotRank: string;
    serialNumber: number;
    squadronId: number;
    approved: boolean;
    note: string;

    constructor() {
        this.username = '';
        this.campaignName = '';
        this.pilotName = '';
        this.pilotRank = '';
        this.squadronId = 0;
        this.serialNumber = 0;
        this.approved = false;
        this.note = '';
    }
}
