import { PhotoComment } from '../photo-datails/photo-comments/photo-comment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from './photo';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {

        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(
            `${API}/photos/upload`,
            formData,
            { observe: 'events', reportProgress: true }
        );
    }

    findById(photoId: number) {
        return this.http
            .get<Photo>(API + '/photos/' + photoId);
    }

    getComments(photoId: number) {
        return this.http
            .get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
    }

    addComment(photoId: number, commentText: string) {
        return this.http.post(API + '/photos/' + photoId + '/comments', { commentText });
    }

    removePhoto(photoId: number) {
        return this.http.delete(API + '/photos/' + photoId);
    }

    like(photoId: number) {
        // o final da url contém {} para dizer que não envia dado nenhum no post.
        return this.http
            .post(API + '/photos/' + photoId + '/like', {}, { observe: 'response' })
            .pipe(map(res => true))
            .pipe(catchError(err => {
                return err.status == '304' ? of(false) : throwError(err);
            }));
    }
}