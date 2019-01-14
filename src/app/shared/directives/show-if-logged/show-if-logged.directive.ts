import { UserService } from './../../../core/user/user.service';
import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        !this.userService.isLogged() &&
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
}