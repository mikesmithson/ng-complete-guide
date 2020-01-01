import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  featureToLoad = 'recipes';
  title = 'Cooking Application';


  enableFeature(loadedFeature: string) {
    this.featureToLoad = loadedFeature;
 }
}
