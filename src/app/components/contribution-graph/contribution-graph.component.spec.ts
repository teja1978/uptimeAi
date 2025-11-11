import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGraphComponent } from './contribution-graph.component';

describe('ContributionGraphComponent', () => {
  let component: ContributionGraphComponent;
  let fixture: ComponentFixture<ContributionGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContributionGraphComponent]
    });
    fixture = TestBed.createComponent(ContributionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
