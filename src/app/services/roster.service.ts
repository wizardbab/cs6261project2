import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private contestants: string[];
  constructor() { 
    this.contestants = [];
  }
  
  getContestants() : string {
    return this.contestants.join();
  }
  
  addContestant(player: string) {
    let foundContestant = null;
    for (let current of this.contestants) {
      if (current === player) {
        foundContestant = current;
      }
    }
    if (player === null || player === "" || foundContestant != null) {
      return false;
    }
    this.contestants.push(player);
    return true;
  }
}
