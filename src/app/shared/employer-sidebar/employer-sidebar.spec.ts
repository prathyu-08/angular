import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSidebar } from './employer-sidebar';

describe('EmployerSidebar', () => {
  let component: EmployerSidebar;
  let fixture: ComponentFixture<EmployerSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployerSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
