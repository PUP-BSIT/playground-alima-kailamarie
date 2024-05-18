import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-two',
  styleUrl: './two.component.css',
  template: `
      <button (click)="increment()">
        Increment from Component 2
      </button>`,
})
export class TwoComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
    console.log(
      'Comp 2 - counterService.count:',
      this.counterService.getCount()
    );
  }
}
