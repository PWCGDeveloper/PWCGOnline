import { Component, OnInit } from '@angular/core';
import { PilotData } from '../model/pilotdata';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  pilots: PilotData[];

  constructor() { }

  ngOnInit() {
  }

}
