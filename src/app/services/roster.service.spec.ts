import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RosterService = TestBed.get(RosterService);
    expect(service).toBeTruthy();
  });
});

describe('getContestants()', () => {
  it('should return empty string',() => {
    const service: RosterService = new RosterService();
    expect(service.getContestants()).toBe("");
  });
});

describe('Methods', () => {
  describe('addContestant()', () => {
    it('should not allow duplicate names', () => {
      const service: RosterService = new RosterService();
      service.addContestant("Joe");
      expect(service.addContestant("Joe")).toBe(false);
    });
    it('should not allow null names', () => {
      const service: RosterService = new RosterService();
      expect(service.addContestant(null)).toBe(false);
    });
    it('should not allow empty string names', () => {
      const service: RosterService = new RosterService();
      expect(service.addContestant("")).toBe(false);
    });
    it('should add one contestant', () => {
      const service: RosterService = new RosterService();
      service.addContestant("Joe");
      expect(service.getContestants()).toBe("Joe");
    });
    it('should add several contestants', () => {
      const service: RosterService = new RosterService();
      service.addContestant("Joe");
      service.addContestant("Bob");
      service.addContestant("Jim");
      service.addContestant("Jill");
      expect(service.getContestants()).toBe("Joe,Bob,Jim,Jill");
    });
  });
});
