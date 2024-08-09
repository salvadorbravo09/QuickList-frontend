import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuicklistComponent } from './components/quicklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuicklistComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'quicklist';
}
