import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIDashboardComponent } from './ui-dashboard.component';

describe('UIDashboardComponent', () => {
  let component: UIDashboardComponent;
  let fixture: ComponentFixture<UIDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UIDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
