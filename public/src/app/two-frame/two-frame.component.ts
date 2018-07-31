import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-two-frame',
  templateUrl: './two-frame.component.html',
  styleUrls: ['./two-frame.component.css']
})
export class TwoFrameComponent implements OnInit {
	streamOne;
	streamTwo;
	streamHeight;
	streamWidth;

 	constructor(
 		private _route: ActivatedRoute,
		private _router: Router
 		) { }

 	ngOnInit() {
 		this._route.params.subscribe((params: Params) => {
			console.log('in two frame component params: ', params)
				this.streamOne = params['first'];
				this.streamTwo = params['second'];
			})

 		var initialHeight = window.innerHeight;
		var initialWidth = window.innerWidth;

		var streamH = initialHeight * 0.48;
		console.log(streamH);
		var streamW = initialWidth * 0.48;
		console.log(streamW);

		this.streamHeight = streamH;
		this.streamWidth = streamW;

		// this.HandW = {"width": "576", "height": "1024"}
		this.loadDynamicallyScript(this.streamOne, 'stream1');
		this.loadDynamicallyScript(this.streamTwo, 'stream2');
	}

	public loadDynamicallyScript(streamName, windowNumber) {
	  	var script = document.createElement('script');
	  	script.src = "https://embed.twitch.tv/embed/v1.js";
	  	script.async = false;
	  	document.head.appendChild(script);
	  	script.onload = () => {
		  	var embed = new Twitch.Embed(windowNumber, {
					width: this.streamWidth,
					height: this.streamHeight,
					channel: streamName,
					layout: "video",
					autoplay: false,
					allowfullscreen: false
				});
				console.log('script running')
				// embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
				// 	var player = embed.getPlayer();
				// 	player.play();
				// });
			}

	}

}
