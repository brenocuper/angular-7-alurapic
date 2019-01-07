import { EnderecoService } from './endereco.service';
import { Component, OnInit } from "@angular/core";
import { Endereco } from './endereco';

@Component({
    selector: 'ap-endereco',
    templateUrl: './endereco.component.html'
})
export class EnderecoComponent implements OnInit {

    endereco:Endereco;
    
    constructor(private enderecoService: EnderecoService) { }
    
    ngOnInit(): void {

        this.enderecoService
            .buscaPorCep('04840070')
            .subscribe(endereco => this.endereco = endereco);
    }
}