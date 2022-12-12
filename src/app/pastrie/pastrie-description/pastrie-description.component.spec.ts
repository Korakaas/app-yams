import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieDescriptionComponent } from './pastrie-description.component';

describe('PastrieDescriptionComponent', () => {
  let component: PastrieDescriptionComponent;
  let fixture: ComponentFixture<PastrieDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastrieDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastrieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
