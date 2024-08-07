import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UiInputContainerDirective, UiInputDirective } from '@lets-be-busy/shared-ui';

@Component({
  selector: 'lbb-pm-project-editor-form',
  standalone: true,
  imports: [CommonModule, UiInputDirective, UiInputContainerDirective],
  templateUrl: './project-editor-form.component.html',
  styleUrl: './project-editor-form.component.scss',
})
export class ProjectEditorFormComponent {

  readonly form = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(64),
    ])
  })
}
