import { Component, OnInit } from '@angular/core';
import { HumanPilot } from '../model/humanpilot';
import { PilotListService } from '../pilotlist.service';
import { Context } from '../model/context';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})



export class NavigationComponent implements OnInit {

  humanPilots = new Map<string, HumanPilot[]>();
  humanPilotList: HumanPilot[];

  constructor(private pilotListService: PilotListService, private router: Router) { }

  ngOnInit() {
    this.getPilotsForUser();
  }

  private getPilotsForUser() {
    this.pilotListService.getPilotsForUser(Context.context.user).then(() => {
      this.humanPilots = this.buildPilotByCampaignMap(this.pilotListService.pilotList);
      this.humanPilotList = this.buildPilotList();
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
    let campaignNames = Array.from(this.humanPilots.keys());
    for (let campaignName of campaignNames) {
      for (let pilot of this.humanPilots.get(campaignName)) {
        humanPilots.push(pilot);
      }
    }
    return humanPilots;
  }

  onPilotChange(selectedPilot: HumanPilot) {
    Context.context.selectedHumanPilot = selectedPilot;
    this.router.navigate(['campaignhome']);
  }
}
