import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsNavBarComponent } from './collections-nav-bar.component';

describe('CollectionsNavBarComponent', () => {
  let component: CollectionsNavBarComponent;
  let fixture: ComponentFixture<CollectionsNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
