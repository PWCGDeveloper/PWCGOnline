import { Component, OnInit } from '@angular/core';
import { SquadronMember } from '../model/squadronmember';

@Component({
  selector: 'app-campaignhome',
  templateUrl: './campaignhome.component.html',
  styleUrls: ['./campaignhome.component.css']
})
export class CampaignHomeComponent implements OnInit {

  squadronMembers: SquadronMember[];

  constructor() { }

  ngOnInit() {
  }

  onChangePilotRequest() {

    try {
    }
    catch (e) {
      console.log('Error submitting campaign information request', e);
    }
  }
}
