import { Component } from '@angular/core';
import { Context } from './model/context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PWCG Online';

  public isLoggedIn(): boolean {
    console.log(JSON.stringify(Context.context));
    return Context.context.isLoggedIn;
  }
}
