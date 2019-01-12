import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPanelComponent } from './advert-panel.component';

describe('AdvertPanelComponent', () => {
  let component: AdvertPanelComponent;
  let fixture: ComponentFixture<AdvertPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
