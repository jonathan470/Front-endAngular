import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonathanRosas } from './jonathan-rosas';

describe('JonathanRosas', () => {
  let component: JonathanRosas;
  let fixture: ComponentFixture<JonathanRosas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JonathanRosas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonathanRosas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
