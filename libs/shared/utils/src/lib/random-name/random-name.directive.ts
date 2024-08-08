import { DestroyRef, Directive, inject, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, combineLatest, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const RANDOM_ANIMAL_API_URL = 'https://random-word-form.herokuapp.com/random/animal';
const RANDOM_ADJECTIVE_API_URL = 'https://random-word-form.herokuapp.com/random/adjective';

const uppercaseFirst = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

@Directive({
  selector: '[lbbRandomName]',
  standalone: true,
  host: {
    '[class.lbb-random-name--loading]': 'onRequest'
  }
})
export class RandomNameDirective implements OnInit {
  private readonly ngControl_ = inject(NgControl);
  private readonly httpClient_ = inject(HttpClient);
  private readonly destroyRef_ = inject(DestroyRef);
  onRequest = false;

  ngOnInit() {

    if (!this.ngControl_ || !this.ngControl_.control || this.ngControl_.control.value) {
      return;
    }

    this.onRequest = true;
    combineLatest({
      animal: this.httpClient_.get<[string]>(RANDOM_ANIMAL_API_URL),
      adjective: this.httpClient_.get<[string]>(RANDOM_ADJECTIVE_API_URL)
    })
      .pipe(
        takeUntilDestroyed(this.destroyRef_),
        catchError(() => of({
          animal: [],
          adjective: [],
        }))
      )
      .subscribe(({ animal, adjective }) => {
        if (this.ngControl_ && this.ngControl_.control) {
          const exampleValue = `${uppercaseFirst(adjective[0])} ${uppercaseFirst(animal[0])}`;
          this.ngControl_
            .control
            .setValue(exampleValue);
        }
      });
  }
}
