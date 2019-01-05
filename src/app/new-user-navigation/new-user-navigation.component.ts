import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-new-user-navigation',
  templateUrl: './new-user-navigation.component.html',
  styleUrls: ['./new-user-navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewUserNavigationComponent implements OnInit {

  mode = new FormControl('over');

  constructor() {
  }

  ngOnInit() {
  }

}
