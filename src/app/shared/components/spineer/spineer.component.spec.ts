import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpineerComponent } from './spineer.component';

describe('SpineerComponent', () => {
  let component: SpineerComponent;
  let fixture: ComponentFixture<SpineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpineerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
