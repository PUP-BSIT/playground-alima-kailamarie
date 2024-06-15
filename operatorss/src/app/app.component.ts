import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CountryService } from '../service/country.service';
import { debounceTime, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchForm : FormGroup;
  isLoading = false;

  constructor (private fb: FormBuilder, countryService: CountryService) {
    this.searchForm = this.fb.group({keyword: ['']});
    this.searchForm
    .get('keyword') !
    .valueChanges.pipe(
      takeUntilDestroyed(),
      filter((keyword) => keyword),
      debounceTime(2000),
    switchMap((keyword) => {
      this.isLoading = true;
      return countryService.getCountryByName(keyword);
    })
  )
    .subscribe((value) => {
      this.isLoading = false;
      console.log(value);
    });
  }
}