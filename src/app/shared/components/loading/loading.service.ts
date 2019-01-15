import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { LoadingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {

    loadingSubject = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingType.stopped));
    }

    start() {
        this.loadingSubject.next(LoadingType.loading);
    }

    stop() {
        this.loadingSubject.next(LoadingType.stopped);
    }
}