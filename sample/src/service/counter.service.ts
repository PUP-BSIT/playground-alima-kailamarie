import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = 0;

  increment() { 
    this.count++;
  }

  getCount() {
    return this.count;
  }
}
