import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePastrieComponent } from './create-pastrie.component';

describe('CreatePastrieComponent', () => {
  let component: CreatePastrieComponent;
  let fixture: ComponentFixture<CreatePastrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePastrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePastrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
