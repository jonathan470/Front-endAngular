import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndresDiaz } from './andres-diaz';

describe('AndresDiaz', () => {
  let component: AndresDiaz;
  let fixture: ComponentFixture<AndresDiaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndresDiaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndresDiaz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
