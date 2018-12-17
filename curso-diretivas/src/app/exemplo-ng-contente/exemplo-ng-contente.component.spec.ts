import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContenteComponent } from './exemplo-ng-contente.component';

describe('ExemploNgContenteComponent', () => {
  let component: ExemploNgContenteComponent;
  let fixture: ComponentFixture<ExemploNgContenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploNgContenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgContenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
