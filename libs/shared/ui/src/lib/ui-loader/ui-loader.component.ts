import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-loader.component.html',
  styleUrl: './ui-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoaderComponent {
  onLoading = input.required();
}
