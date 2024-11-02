// src/app/profile-list/profile-list.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
  @Input() profiles: any[] = [];

  filter = {
    sex: '',
    year: ''
  };

  filteredProfiles() {
    return this.profiles.filter(profile => {
      const matchesSex = this.filter.sex ? profile.sex === this.filter.sex : true;
      const matchesYear = this.filter.year ? profile.year === this.filter.year : true;
      return matchesSex && matchesYear;
    });
  }
}
