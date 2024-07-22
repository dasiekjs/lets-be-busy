import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uiCardHeader]',
  standalone: true
})
export class UiCardHeaderDirective {
  public templateRef = inject<TemplateRef<any>>(TemplateRef);
}
