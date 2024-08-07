import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectEditorFormComponent } from './project-editor-form.component';

describe('ProjectEditorFormComponent', () => {
  let component: ProjectEditorFormComponent;
  let fixture: ComponentFixture<ProjectEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEditorFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
