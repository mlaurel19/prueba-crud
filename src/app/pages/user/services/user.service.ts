import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httprequest = inject(HttpClient);
  public url: string = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.httprequest.get<User[]>(this.url);
  }

}
