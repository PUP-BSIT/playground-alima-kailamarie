import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost/backend';

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_user.php`, user);
  }

  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fetch_users.php`);
  }
}

/*<div *ngIf="users.length > 0; else noUsers">
<h2>User List</h2>
<ul>
  <li *ngFor="let user of users">
    {{ user.givenName }} {{ user.lastName }} ({{ user.email }})
  </li>
</ul>
</div>
<ng-template #noUsers>
<p>No users added yet.</p>
</ng-template>*/ 