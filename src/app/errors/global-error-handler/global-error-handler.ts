import { ServerLogService } from './server-log.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { environment } from 'src/environments/environment';
import * as StackTrace from 'stacktrace-js';
import { UserService } from './../../core/user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {
        console.log('Passei pelo handler');

        // Troca a injeção do construtor para fazer a injeção dentro do método.
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        // TODO | Estudar o instanceof
        const url = location instanceof PathLocationStrategy ? location.path() : '';

        const message = error.message ? error.message : error.toString();

        if (environment.production) router.navigate(['/error']);

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(sf => sf.toString())
                    .join('\n');

                console.log(message);
                console.log(stackAsString);
                console.log('O que será enviado para o servidor:');
                serverLogService.log({ message, url, userName: userService.getUserName(), stack: stackAsString })
                    .subscribe(
                        () => console.log('Error logged on server'),
                        err => {
                            console.log(err);
                            console.log('Fail to send error to server');
                        }
                    );
            })
    }
}