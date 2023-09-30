import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingExampleComponent } from './loading-example.component';

describe('LoadingExampleComponent', () => {
  let component: LoadingExampleComponent;
  let fixture: ComponentFixture<LoadingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
