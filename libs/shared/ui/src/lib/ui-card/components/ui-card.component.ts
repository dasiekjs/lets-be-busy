import { Component, contentChild, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonDirective } from '../../ui-button/ui-button.directive';
import { UiCardHeaderDirective } from '../directives/ui-card-header/ui-card-header.directive';
import { UiCardActionsDirective } from '../directives/ui-card-actions/ui-card-actions.directive';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule, UiButtonDirective],
  templateUrl: './ui-card.component.html',
  // styleUrl: './ui-card.component.scss',
})
export class UiCardComponent {

  title = input<string>();
  subtitle = input<string>();
  cardHeader = contentChild(UiCardHeaderDirective);
  cardActions = contentChild(UiCardActionsDirective);

}
