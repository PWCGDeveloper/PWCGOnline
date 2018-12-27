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

  pilots: PilotData[];

  constructor(private pilotListService: PilotListService) { }

  ngOnInit() {
    this.getPilotsForUser();
  }

  private getPilotsForUser() {
    this.pilotListService.getPilotsForUser(Context.context.user).then(() => {
      this.pilots = this.pilotListService.pilotList;
    });
  }
}
