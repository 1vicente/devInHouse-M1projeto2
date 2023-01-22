import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProntuariosComponent } from './lista-prontuarios.component';

describe('ListaProntuariosComponent', () => {
  let component: ListaProntuariosComponent;
  let fixture: ComponentFixture<ListaProntuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProntuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProntuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
