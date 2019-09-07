import { Component, OnInit } from '@angular/core';
import { HumanPilot } from '../model/humanpilot';
import { NewPilotService } from '../newpilot.service';
import { CampaignListService } from '../campaignList.service';
import { SquadronListService } from '../squadronlist.service';
import { RankService } from '../rank.service';
import { Campaign } from '../model/campaign';
import { Squadron } from '../model/squadron';
import { Rank } from '../model/rank';
import { Context } from '../model/context';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-newpilot',
  templateUrl: './newpilot.component.html',
  styleUrls: ['./newpilot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPilotComponent implements OnInit {

  campaigns: Campaign[];
  squadrons: Squadron[];
  ranks: Rank[];
  clickMessage: string;
  loading: boolean;

  selectedCampaign: Campaign;
  selectedSquadron: Squadron;
  selectedRank: Rank;

  newPilotData: HumanPilot = new HumanPilot();

  constructor(
    private newPilotService: NewPilotService,
    private campaignListService: CampaignListService,
    private squadronListService: SquadronListService,
    private ranksService: RankService)  {
    this.campaigns = [];
    this.squadrons = [];
    this.clickMessage = `Enter user registration information and click submit`;
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.clickMessage = `Loading campaign data ...`;
    this.getCampaigns();
    this.selectedCampaign = undefined;
    this.selectedSquadron = undefined;
    this.selectedRank = undefined;
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
      if (this.ranks.length > 0) {
        this.clickMessage = `Data load complete.  Proceed with selection`;
      }
    });
  }

  onSubmitNewPilotRequest() {
    try {
      if (this.validate()) {
        console.log(`Squadron is: ` + JSON.stringify(this.selectedSquadron));
        console.log(`Submit new pilot: ` + JSON.stringify(this.newPilotData));
        this.newPilotData.username = Context.context.user;
        this.newPilotData.campaignName = this.selectedCampaign.name;
        this.newPilotData.squadronId = this.selectedSquadron.squadronId;
        this.newPilotData.pilotRank = this.selectedRank.rankName;
        const obs = this.newPilotService.postNewPilotRequest(this.newPilotData);
        obs.subscribe(
          data => {
            this.clickMessage = "New pilot request submitted for " + this.newPilotData.pilotName;
          },
          error => { 
            if (error.status == 409) {
              this.clickMessage = `Pilot ${this.newPilotData.pilotName} already exists.  Choose another name`;
            }
            else {
              this.clickMessage = `Server error for user ${this.newPilotData.pilotName}.  Contact host`;
            }
          }
       );

        this.clickMessage = `New player request submitted for ` + this.newPilotData.username;
      } else {
        this.clickMessage = `Pilot name, campaign, and squadron are required fields`;
      }
    } catch (e) {
      console.log(`Error submitting new user request`, e);
    }
  }

  validate() {

    console.log(`Validate pilot name ${this.newPilotData.pilotName}`);
    console.log(`Validate campaign name ${this.selectedCampaign.name}`);
    console.log(`Validate squadron is ${this.selectedSquadron.squadronId}`);
    console.log(`Validate rank name ${this.selectedRank.rankName}`);

    if (this.newPilotData.pilotName === '') {
      return false;
    }
    
    if (this.selectedCampaign === undefined) {
      return false;
    }
    
    if (this.selectedSquadron === undefined) {
        return false;
    }

    if (this.selectedRank === undefined) {
      return false;
    }
  
    return true;
  }

  onCampaignChange(event) {
    this.selectedCampaign = event.value;
    console.log(`Campaign selected ${this.selectedCampaign.name}`);
  }
  onSquadronChange(event) {
    this.selectedSquadron = event.value;
    console.log(`Squadron selected ${this.selectedSquadron.squadronId}`);
  }

  onRankChange(event) {
    this.selectedRank = event.value;
    console.log(`Rank selected ${this.selectedRank.rankName}`);
  }
}
