import { Component } from '@angular/core';
import { dropIn } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [dropIn]
})
export class AppComponent {
  title = 'todo-webapp';
}
