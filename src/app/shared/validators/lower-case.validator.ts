import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {


    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {

        // Se houver erro!
        return { lowerCase: true }
    }
        
    // Se não houver erro de validação.
    return null;
}