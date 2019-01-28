import { Component, OnInit } from '@angular/core';
import { SquadronMember } from '../model/squadronmember';
import { Context } from '../model/context';
import { SquadronPersonnelService } from '../squadronpersonnel.service';

@Component({
  selector: 'app-campaignhome',
  templateUrl: './campaignhome.component.html',
  styleUrls: ['./campaignhome.component.css']
})
export class CampaignHomeComponent implements OnInit {

  squadronMembers: SquadronMember[];
  columnHeaders: string[];


  constructor(private squadronPersonnelService: SquadronPersonnelService) { 
    this.squadronMembers = [];
    this.columnHeaders = ['Pilot Name', 'Air Victories'];
  }

  ngOnInit() {
    this.onCampaignHomeRequest();
  }

  onCampaignHomeRequest() {

    try {
      console.log(`onCampaignHomeRequest ${JSON.stringify(Context.context.selectedHumanPilot)}`);
      this.squadronPersonnelService.getSquadronPersonnel(Context.context.selectedHumanPilot).then(() => {
        this.squadronMembers = this.squadronPersonnelService.squadronPersonnel;
        console.log(`Personnel: ${JSON.stringify(this.squadronMembers)}`);
      });
    }
    catch (e) {
      console.log('Error submitting campaign information request', e);
    }
  }
}
