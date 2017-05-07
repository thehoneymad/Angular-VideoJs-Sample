import { Component } from '@angular/core';
import { VideoJSConfig } from '../videojs/videojs.config';

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html',
    styleUrls: [
        'home.css'
    ]
})
export class HomeComponent {
    public videoConfigs: VideoJSConfig[] = [
        {
            id: '1',
            type: 'video/mp4',
            url: 'http://vjs.zencdn.net/v/oceans.mp4'
        },
        {
            id: '2',
            type: 'video/youtube',
            url: 'https://www.youtube.com/watch?v=pz565EFb38I'
        },
        {
            id: '3',
            type: 'application/x-mpegURL',
            url: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
        }
    ];
}
