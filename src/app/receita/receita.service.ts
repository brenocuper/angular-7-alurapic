import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReceitaService {
    
    constructor(private http:HttpClient) { }
    
    getByCNPJ() {

        return this.http
            .get<Object>('https://www.receitaws.com.br/v1/cnpj/27865757000102');
    }
}