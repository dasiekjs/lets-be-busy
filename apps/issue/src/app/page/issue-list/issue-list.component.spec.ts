import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesListComponent } from './issue-list.component';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
