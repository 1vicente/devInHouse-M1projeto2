import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioDetalheComponent } from './prontuario-detalhe.component';

describe('ProntuarioDetalheComponent', () => {
  let component: ProntuarioDetalheComponent;
  let fixture: ComponentFixture<ProntuarioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProntuarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
