import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndresHurtado } from './andres-hurtado';

describe('AndresHurtado', () => {
  let component: AndresHurtado;
  let fixture: ComponentFixture<AndresHurtado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndresHurtado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndresHurtado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
