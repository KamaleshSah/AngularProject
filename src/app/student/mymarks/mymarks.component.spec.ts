import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymarksComponent } from './mymarks.component';

describe('MymarksComponent', () => {
  let component: MymarksComponent;
  let fixture: ComponentFixture<MymarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
