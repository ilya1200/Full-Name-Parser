import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserResultsComponent } from './parser-results.component';

describe('ParserResultsComponent', () => {
  let component: ParserResultsComponent;
  let fixture: ComponentFixture<ParserResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParserResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
