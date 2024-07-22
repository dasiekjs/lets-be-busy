import { Directive } from '@angular/core';

@Directive({
  selector: '[uiCardTitle]',
  standalone: true,
  host: {
    'class': 'card__header__title__title-element'
  }
})
export class UiCardTitleDirective {
}
