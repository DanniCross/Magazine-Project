import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutorComponent } from './home-autor.component';

describe('HomeAutorComponent', () => {
  let component: HomeAutorComponent;
  let fixture: ComponentFixture<HomeAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
