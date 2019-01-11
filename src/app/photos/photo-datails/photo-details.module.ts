import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        PhotoModule,
        ReactiveFormsModule,
        VmessageModule
    ],
    exports: [
        PhotoDetailsComponent
    ]
})
export class PhotoDetailsModule { }