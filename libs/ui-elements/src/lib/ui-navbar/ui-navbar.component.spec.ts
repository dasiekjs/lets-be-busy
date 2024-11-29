import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UINavbarComponent } from './ui-navbar.component';

describe('UINavbarComponent', () => {
  let component: UINavbarComponent;
  let fixture: ComponentFixture<UINavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UINavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UINavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
