import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-three-frame',
  templateUrl: './three-frame.component.html',
  styleUrls: ['./three-frame.component.css']
})
export class ThreeFrameComponent implements OnInit {
	streamOne;
	streamTwo;
	streamThree;
	constructor(
 		private _route: ActivatedRoute,
		private _router: Router
 		) { }

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
			console.log('in three frame component params: ', params)
				this.streamOne = params['first'];
				this.streamTwo = params['second'];
				this.streamThree = params['third'];
			})
		this.loadDynamicallyScript(this.streamOne, 'stream1');
		this.loadDynamicallyScript(this.streamTwo, 'stream2');
		this.loadDynamicallyScript(this.streamThree, 'stream3');
	}

	public loadDynamicallyScript(streamName, windowNumber) {
		var script = document.createElement('script');
		script.src = "https://embed.twitch.tv/embed/v1.js";
	  	script.async = false;
	  	document.head.appendChild(script);
	  	script.onload = () => {
		  	var embed = new Twitch.Embed(windowNumber, {
					width: 640,
					height: 360,
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