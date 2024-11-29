import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UIDashboardComponent} from "@lets-be-busy/ui-elements";

@Component({
  standalone: true,
  imports: [RouterModule, UIDashboardComponent],
  selector: 'lbb-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lets-be-busy';
}
