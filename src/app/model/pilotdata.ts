export class PilotData {
    username: String;
    campaignName: String;
    pilotName: String;
    pilotRank: String;
    serialNumber: number;
    squadronId: number;
    approved: boolean;
    note: String;

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
