import {
    Component,
    AfterViewInit,
    Input
} from '@angular/core';

import { VideoJSConfig } from './videojs.config';

declare let videojs: any;

@Component({
    moduleId: module.id,
    selector: 'as-videojs',
    templateUrl: 'videojs.component.html'
})
export class VideoJSComponent implements AfterViewInit {
    @Input() config: VideoJSConfig;

    private player: any;

    ngAfterViewInit() {
        // You can use viewchild here, I took the easiest way out and the sample plunker I saw, worked.
        let el = 'video_' + this.config.id;

        this.player = videojs(document.getElementById(el), {}, function () {
            let myPlayer = this, id = myPlayer.id();
            // All of these can be passed using input, you can make your own config object btw
            let aspectRatio = 264 / 640;

            function resizeVideoJS() {
                let width = document.getElementById(id).parentElement.offsetWidth;
                myPlayer.width(width).height(width * aspectRatio);
            }

            resizeVideoJS();
            window.onresize = resizeVideoJS;
        });
    }
}
