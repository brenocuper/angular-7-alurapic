import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { EnderecoComponent } from "./endereco/endereco.component";

@NgModule({
    declarations: [ EnderecoComponent ],
    imports: [ CommonModule ],
    exports: [ EnderecoComponent ]
})
export class EnderecosModule { }