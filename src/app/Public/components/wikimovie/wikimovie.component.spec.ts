import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikimovieComponent } from './wikimovie.component';

describe('WikimovieComponent', () => {
  let component: WikimovieComponent;
  let fixture: ComponentFixture<WikimovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikimovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikimovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
