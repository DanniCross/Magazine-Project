import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendArticlesComponent } from './send-articles.component';

describe('SendArticlesComponent', () => {
  let component: SendArticlesComponent;
  let fixture: ComponentFixture<SendArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
