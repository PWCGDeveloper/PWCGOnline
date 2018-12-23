import { Component, OnInit } from '@angular/core';
import { NewPilotData } from '../model/new-pilot-data';
import { NewPilotService } from '../newpilot.service';
import { CampaignListService } from '../campaignList.service';
import { SquadronListService } from '../squadronList.service';
import { Campaign } from '../model/campaign';
import { Squadron } from '../model/squadron';
import { Context } from '../model/context';

@Component({
  selector: 'app-newpilot',
  templateUrl: './newpilot.component.html',
  styleUrls: ['./newpilot.component.css']
})
export class NewPilotComponent implements OnInit {

  campaigns: Campaign[];
  squadrons: Squadron[];
  clickMessage: String;
  loading: boolean;

  newPilotData: NewPilotData =
    {
      username: "",
      campaignName: "",
      squadronName: "",
      pilotName: "",
      serialNumber: 0,
      note: 'I want a new pilot',
    }

  constructor(private newPilotService: NewPilotService, private campaignListService: CampaignListService, private squadronListService: SquadronListService) {
    console.log("NewPilotComponent Constructor");
    this.campaigns = [];
    this.squadrons = [];
    this.clickMessage = "Enter user registration information and click submit";
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.clickMessage = "Loading campaign data ...";
    this.getCampaigns();
  }

  private getCampaigns() {
    this.campaignListService.getCampaignList().then(() => {
      this.campaigns = this.campaignListService.campaignList;
      if (this.campaigns.length > 0) {
        this.getSquadronsForCampaign(this.campaigns[0].name);
      }
    });
  }

  private getSquadronsForCampaign(campaignName: string) {
    this.clickMessage = "Loading squadron data for campaign ";

    this.squadronListService.getCampaignSquadronList(campaignName).then(() => {
      this.squadrons = this.squadronListService.squadronList;
      this.clickMessage = "Data load complete.  Proceed with selection";
    });
  }

  onSubmitNewPilotRequest() {
    try {
      if (this.validate()) {
        console.log(`Submit new pilot: ` + JSON.stringify(this.newPilotData));
        this.newPilotData.username = Context.context.user;
        this.newPilotService.postNewPilotRequest(this.newPilotData);
        this.clickMessage = "New player request submitted for " + this.newPilotData.username;
      }
      else {
        this.clickMessage = "Pilot name, campaign, and squadron are required fields";
      }
    }
    catch (e) {
      console.log("Error submitting new user request", e);
    }
  }

  validate() {

    if (this.newPilotData.pilotName == '') {
      return false;
    }
    if (this.newPilotData.squadronName == '') {
      return false;
    }
    if (this.newPilotData.campaignName == '') {
      return false;
    }

    return true;
  }

}
