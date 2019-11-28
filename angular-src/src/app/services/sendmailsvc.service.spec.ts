import { TestBed } from '@angular/core/testing';

import { SendmailsvcService } from './sendmailsvc.service';

describe('SendmailsvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendmailsvcService = TestBed.get(SendmailsvcService);
    expect(service).toBeTruthy();
  });
});
