import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureLoaded = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  loadFeature(feature: string) {
    this.featureLoaded.emit(feature);
  }
}
