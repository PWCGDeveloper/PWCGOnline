import { Component, OnInit } from '@angular/core';
import { HumanPilot } from '../model/humanpilot';
import { PilotListService } from '../pilotlist.service';
import { Context } from '../model/context';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {

  selectedPilot: HumanPilot;
  pilots = new Map<string, HumanPilot[]>();
  pilotList: HumanPilot[];

  constructor(private pilotListService: PilotListService) { }

  ngOnInit() {
    this.getPilotsForUser();
  }

  private getPilotsForUser() {
    this.pilotListService.getPilotsForUser(Context.context.user).then(() => {
      this.pilots = this.buildPilotByCampaignMap(this.pilotListService.pilotList);
      this.pilotList = this.buildPilotList();
    });
  }

  private buildPilotByCampaignMap(retrievedPilots: HumanPilot[]): Map<string, HumanPilot[]> {
    let pilots = new Map<string, HumanPilot[]>();

    for (let retrievedPilot of retrievedPilots) {
      console.log(JSON.stringify(retrievedPilot));
      if (pilots.has(retrievedPilot.campaignName)) {
        let pilotsForCampaign = pilots.get(retrievedPilot.campaignName);
        pilotsForCampaign.push(retrievedPilot);
      }
      else {
        let pilotsForCampaign: HumanPilot[] = [];
        pilotsForCampaign.push(retrievedPilot);
        pilots.set(retrievedPilot.campaignName, pilotsForCampaign);
      }
    };

    return pilots;
  }

  buildPilotList(): HumanPilot[] {
    let humanPilots: HumanPilot[] = [];
    let campaignNames = Array.from(this.pilots.keys());
    for (let campaignName of campaignNames) {
      for (let pilot of this.pilots.get(campaignName)) {
        humanPilots.push(pilot);
      }
    }
    return humanPilots;
  }

  onPilotChange(selectedPilot: HumanPilot) {
    this.selectedPilot = selectedPilot;
    console.log(`Pilot selected ${selectedPilot.pilotName}`);
  }
}
