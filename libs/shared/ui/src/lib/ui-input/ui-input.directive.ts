import { Directive } from '@angular/core';

@Directive({
  selector: '[uiInput]',
  standalone: true,
  host: {
    'class': 'ui-input'
  }
})
export class UiInputDirective {
}
