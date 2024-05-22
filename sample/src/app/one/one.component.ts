import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-one',
  styleUrl: './one.component.css',
  template: `
      <button (click)="increment()">
        Increment from Component 1
      </button>`,
})
export class OneComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
    console.log(
      'Comp 1 - counterService.count:',
      this.counterService.getCount()
    );
  }
}
