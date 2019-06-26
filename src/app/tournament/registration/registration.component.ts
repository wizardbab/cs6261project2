import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public players: string[];
  public information: string;

  constructor(private roster: RosterService) { 
    this.players = ['', '', '', '', '', '', '', ''];
    this.information = '';
  }

  registerContestants() {
    for (let current = 0; current < this.players.length; current++) {
      if (this.players[current] != null || this.players[current] != '') {
        this.roster.addContestant(this.players[current]);
      }
    }
    if (!(this.roster.getCount() == 2 || this.roster.getCount() == 4 || this.roster.getCount() == 8)) {
      this.information = "Roster does not contain 2, 4, or 8 contestants.";
    } else {
      this.information = this.roster.getContestants();
    }
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }
  
  ngOnInit() {
  }

}
