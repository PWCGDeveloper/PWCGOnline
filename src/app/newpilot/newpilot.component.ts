import { Component, OnInit } from '@angular/core';
import { PilotData } from '../model/pilotdata';
import { NewPilotService } from '../newpilot.service';
import { CampaignListService } from '../campaignList.service';
import { SquadronListService } from '../squadronList.service';
import { RankService } from '../rank.service';
import { Campaign } from '../model/campaign';
import { Squadron } from '../model/squadron';
import { Rank } from '../model/rank';
import { Context } from '../model/context';

@Component({
  selector: 'app-newpilot',
  templateUrl: './newpilot.component.html',
  styleUrls: ['./newpilot.component.css']
})
export class NewPilotComponent implements OnInit {

  campaigns: Campaign[];
  squadrons: Squadron[];
  ranks: Rank[];
  clickMessage: String;
  loading: boolean;
  squadron: Squadron;
  rank: Rank;

  newPilotData: PilotData =
    {
      username: ``,
      campaignName: ``,
      squadronId: 0,
      pilotName: ``,
      serialNumber: 0,
      approved: false,
      note: 'I want a new pilot',
    };

  constructor(
    private newPilotService: NewPilotService,
    private campaignListService: CampaignListService,
    private squadronListService: SquadronListService,
    private ranksService: RankService)  {
    console.log(`NewPilotComponent Constructor`);
    this.campaigns = [];
    this.squadrons = [];
    this.clickMessage = `Enter user registration information and click submit`;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.clickMessage = `Loading campaign data ...`;
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
    this.clickMessage = `Loading squadron data for campaign `;

    this.squadronListService.getCampaignSquadronList(campaignName).then(() => {
      this.squadrons = this.squadronListService.squadronList;
      this.clickMessage = `Loading ranks for squadron`;
      if (this.squadrons.length > 0) {
        this.getRanksForSquadron(this.squadrons[0].serviceId);
      }
    });
  }

  private getRanksForSquadron(serviceId: number) {
    this.clickMessage = `Loading ranks for squadron `;

    this.ranksService.getRanksForService(serviceId).then(() => {
      this.ranks = this.ranksService.ranks;
      this.clickMessage = `Data load complete.  Proceed with selection`;
    });
  }

  onSubmitNewPilotRequest() {
    try {
      if (this.validate()) {
        console.log(`Submit new pilot: ` + JSON.stringify(this.newPilotData));
        this.newPilotData.username = Context.context.user;
        this.newPilotData.squadronId = this.squadron.squadronId;
        this.newPilotData.pilotRank = this.rank.rankName;
        this.newPilotService.postNewPilotRequest(this.newPilotData);
        this.clickMessage = `New player request submitted for ` + this.newPilotData.username;
      } else {
        this.clickMessage = `Pilot name, campaign, and squadron are required fields`;
      }
    } catch (e) {
      console.log(`Error submitting new user request`, e);
    }
  }

  validate() {

    if (this.newPilotData.pilotName === '') {
      return false;
    }
    if (this.squadron.squadronId === 0) {
      return false;
    }
    if (this.newPilotData.campaignName === '') {
      return false;
    }

    return true;
  }

}
