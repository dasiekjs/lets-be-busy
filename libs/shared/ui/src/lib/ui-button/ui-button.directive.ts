import { Directive, Input } from '@angular/core';
import { AllowedColors } from '../../types';

@Directive({
  selector: '[uiButton]',
  standalone: true,
  host: {
    'class': 'btn',
    '[class.btn--primary]': 'color === "primary"',
    '[class.btn--outline]': 'outlineButton === true',
  }
})
export class UiButtonDirective {

  outlineButton = false;

  @Input() set outline(outline_: string | boolean){
    if (typeof outline_ === 'boolean'){
      this.outlineButton = outline_;
    } else {
      this.outlineButton = true;
    }
  }
  @Input() color?: AllowedColors = 'primary';
}
