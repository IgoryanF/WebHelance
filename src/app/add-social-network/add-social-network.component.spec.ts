import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialNetworkComponent } from './add-social-network.component';

describe('AddSocialNetworkComponent', () => {
  let component: AddSocialNetworkComponent;
  let fixture: ComponentFixture<AddSocialNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocialNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
