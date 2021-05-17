import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassworddComponent } from './passwordd.component';

describe('PassworddComponent', () => {
  let component: PassworddComponent;
  let fixture: ComponentFixture<PassworddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassworddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassworddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
