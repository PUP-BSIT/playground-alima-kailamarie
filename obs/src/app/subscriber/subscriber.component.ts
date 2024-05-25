import { Component } from '@angular/core';
import { NumberGeneratorService } from '../../service/number-generator.service';
//import { Subject, takeUntil } from 'rxjs';
//import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subscriber',
  styleUrl: './subscriber.component.css',
  template: `{{ numberGeneratorService.numberListener | async }}`,
})
export class SubscriberComponent {

  constructor(protected numberGeneratorService: NumberGeneratorService) {}
}
