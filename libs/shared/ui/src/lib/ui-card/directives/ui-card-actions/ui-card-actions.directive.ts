import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiCardActions]',
  standalone: true,
})
export class UiCardActionsDirective {
  public templateRef = inject<TemplateRef<any>>(TemplateRef);
}
