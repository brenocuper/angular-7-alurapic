import { NgModule } from "@angular/core";

import { ReceitaComponent } from "./receita.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ ReceitaComponent ],
    imports: [ CommonModule ],
    exports: [ ReceitaComponent ]
})
export class ReceitaModule { }