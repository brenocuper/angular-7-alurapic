import { UserService } from '../user/user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router) {}

    canActivate() {

        if(!this.userService.isLogged()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}