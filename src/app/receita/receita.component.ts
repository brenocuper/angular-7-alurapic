import { ReceitaService } from './receita.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ap-receita',
    templateUrl: './receita.component.html'
})
export class ReceitaComponent implements OnInit {

    constructor(private receitaService:ReceitaService) { }

    ngOnInit() {

        this.receitaService
            .getByCNPJ()
            .subscribe(empresa => console.log(empresa));
    }
}