import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-google-charts';

  chart = {
    type: 'ColumnChart',
    data: [
      ['Math', 70],
      ['History', 75],
      ['English', 80],
      ['Geomatry', 66],
      ['Science', 55],
    ]
  };
}
