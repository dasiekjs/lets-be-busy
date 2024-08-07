import { Directive, Input } from '@angular/core';
import { AllowedColors } from '../../types';

@Directive({
  selector: '[uiInputContainer]',
  standalone: true,
  host: {
    class: 'ui-input-container',
    '[class.ui-input-container--primary]': 'color === "primary"',
  }
})
export class UiInputContainerDirective {
  @Input() color?: AllowedColors = 'primary';
}
