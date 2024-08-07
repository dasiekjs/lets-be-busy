import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective } from '@lets-be-busy/shared-ui';
import { ProjectEditorFormComponent } from '../../components/project-editor-form/project-editor-form.component';

@Component({
  selector: 'lbb-pm-create-new-project',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective, ProjectEditorFormComponent],
  templateUrl: './create-new-project.component.html',
  styleUrl: './create-new-project.component.scss',
})
export class CreateNewProjectComponent {}
