import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerssonValencia } from './gersson-valencia';

describe('GerssonValencia', () => {
  let component: GerssonValencia;
  let fixture: ComponentFixture<GerssonValencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerssonValencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerssonValencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
