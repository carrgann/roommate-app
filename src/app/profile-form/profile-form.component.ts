// src/app/profile-form/profile-form.component.ts

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profile = {
    name: '',
    sex: '',
    year: '',
    cleanliness: '',
    sleepSchedule: '',
    lifestyle: ''
  };

  @Output() profileAdded = new EventEmitter<any>();

  addProfile() {
    this.profileAdded.emit(this.profile);
    this.profile = { name: '', sex: '', year: '', cleanliness: '', sleepSchedule: '', lifestyle: '' };
  }
}
