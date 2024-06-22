import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost/backend';

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fetch_users.php`);
  }

  fetchUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fetch_user_by_id.php?id=${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_user.php`, user);
  }
}