import { NgModule } from '@angular/core';
import { VideoJSComponent } from './index';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    declarations: [
        VideoJSComponent
    ],
    exports: [
        VideoJSComponent
    ]
})
export class VideoJSModule {
}
