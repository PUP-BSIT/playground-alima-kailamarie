import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users$.subscribe(users => this.users = users);
  }
}

// Create a component that will contain the list of user's ID.
// Create a component that will contain the user details.
//Add a route parameter so that when the user clicks an item in the list, it will navigate to "localhost:4200/user/{id}", and will display the lastname, givenname, and email in the user-details page which is fetched from the backend. (mysql database php only)