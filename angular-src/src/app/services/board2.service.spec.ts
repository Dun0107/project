import { TestBed } from "@angular/core/testing";

import { Board2Service } from "./board2.service";

describe("Board2Service", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: Board2Service = TestBed.get(Board2Service);
    expect(service).toBeTruthy();
  });
});
