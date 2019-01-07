import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { Endereco } from './endereco';

const API = 'https://viacep.com.br/ws/';

@Injectable({ providedIn: 'root' })
export class EnderecoService {

    constructor(private http:HttpClient) { }

    buscaPorCep(cep:string): Observable<Endereco> {

        return this.http
            .get<Endereco>(API + cep + '/json/');
    }
}