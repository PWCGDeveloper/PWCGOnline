import { Component, OnInit } from '@angular/core';
import { PilotData } from '../model/pilotdata';
import { PilotListService } from '../pilotlist.service';
import { Context } from '../model/context';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {

  pilots = new Map<string, PilotData[]>();
  constructor(private pilotListService: PilotListService) { }

  ngOnInit() {
    this.getPilotsForUser();
  }

  private getPilotsForUser() {
    this.pilotListService.getPilotsForUser(Context.context.user).then(() => {
      this.pilots = this.buildPilotByCampaignMap(this.pilotListService.pilotList);
    });
  }

  private buildPilotByCampaignMap(retrievedPilots: PilotData[]): Map<string, PilotData[]> {
    let pilots = new Map<string, PilotData[]>();

    for (let retrievedPilot of retrievedPilots) {
      console.log(JSON.stringify(retrievedPilot));
      if (pilots.has(retrievedPilot.campaignName)) {
        let pilotsForCampaign = pilots.get(retrievedPilot.campaignName);
        pilotsForCampaign.push(retrievedPilot);
      }
      else {
        let pilotsForCampaign: PilotData[] = [];
        pilotsForCampaign.push(retrievedPilot);
        pilots.set(retrievedPilot.campaignName, pilotsForCampaign);
      }
    };

    return pilots;
  }
}
