import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { VideoJSModule } from '../videojs/videojs.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        VideoJSModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
