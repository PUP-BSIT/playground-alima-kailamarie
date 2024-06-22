import { Component, OnInit } from '@angular/core';
// user-form.component.ts or user-list.component.ts
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // component logic
  constructor() { }

  ngOnInit(): void { }
}