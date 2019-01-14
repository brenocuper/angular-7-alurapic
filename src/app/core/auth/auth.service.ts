import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authenticate(userName: string, password: string) {
    // Quando o nome da propriedade é o mesmo nome da variável ou parâmetro { userName, password }
    return this.http
      .post( `${API}/user/login`, {userName: userName, password: password}, {observe: 'response'})
      .pipe(
        tap(res => {
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken);
          console.log(`User ${userName} authenticated with token ${authToken}`);
        })
      );
  }
}
