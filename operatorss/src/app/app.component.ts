import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CountryService } from '../service/country.service';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchForm : FormGroup;

  constructor (private fb: FormBuilder, countryService: CountryService) {
    this.searchForm = this.fb.group({keyword: ['']});
    this.searchForm
    .get('keyword') !
    .valueChanges.pipe(
      takeUntilDestroyed(),
      debounceTime(2000),
    switchMap((keyword) => {
      return countryService.getCountryByName(keyword);
    })
  )
    .subscribe((value) => {
      console.log(value);
    });
  }
}