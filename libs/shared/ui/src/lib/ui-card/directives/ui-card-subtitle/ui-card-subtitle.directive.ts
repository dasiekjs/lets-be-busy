import { Directive } from '@angular/core';

@Directive({
  selector: '[uiCardSubtitle]',
  standalone: true,
  host: {
    'class': 'card__header__title__subtitle-element'
  }
})
export class UiCardSubtitleDirective {
}
