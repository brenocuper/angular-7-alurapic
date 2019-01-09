import { PhotoDetailsModule } from './photo-datails/photo-details.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { NgModule } from "@angular/core";

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoDetailsModule
    ]
})
export class PhotosModule { }