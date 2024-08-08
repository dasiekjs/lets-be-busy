import { Directive } from '@angular/core';

@Directive({
  selector: '[uiInputPrefix]',
  standalone: true,
  host: {
    'class': 'ui-input-prefix',
  }
})
export class UiInputPrefixDirective {

}
