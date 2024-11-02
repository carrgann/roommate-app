// src/app/app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profiles: any[] = [];

  onProfileAdded(profile: any) {
    this.profiles.push(profile);
  }
}
