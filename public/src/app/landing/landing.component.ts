import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	topTenStreams: any;
	selectedStreams = [];
	searchResults = [];
	launchError = '';
	status = 'streams';//means live streams

	constructor(
		private _landingService: LandingService,
		private _router: Router 
		) { 

	}

	ngOnInit() {
		this._landingService.topTen().subscribe(response =>{
			this.topTenStreams = response['streams'];
			console.log('landing component top ten response', this.topTenStreams);
		});
	}

	channelSearch(name: string): any{
		console.log('name: ', name);
		this._landingService.searchStream(name, this.status).subscribe( res => {
			// console.log('res: ', res['channels']);
			this.searchResults = res['channels'];

		})
	}

	channelLiveSearch(name: string):any {
		this._landingService.searchStreamLive(name).subscribe( res => {
			// console.log('res live search: ', res);
			this.searchResults = res;

		})
	}

	addToList(channel: any): any {
		this.searchResults = [];
		this.launchError = '';
		if(this.selectedStreams.length == 4){
			this.launchError = "Only 4 streams are supported currently"
		} else{
			console.log('stream added to favorites: ', channel['display_name']);
			this.selectedStreams.push(channel);
		}
		// console.log('clearing search')
		// this.searchResults = [];
		console.log('holding these streams: ', this.selectedStreams)
	}

	removeFromList(channel: any): any{
		this.launchError = '';
		console.log("removing channel: ", channel['display_name'])
		for( var i = 0; i < this.selectedStreams.length; i ++){
			if(this.selectedStreams[i]['_id'] == channel['_id']){
				this.selectedStreams.splice(i, 1);
				break;
			}
		}
	}

	launchSelected(){
		this.launchError = '';
		if(this.selectedStreams.length < 2){
			this.launchError = "Select 2 or more streams"
		} else if(this.selectedStreams.length == 2){
			console.log('launching: 2 streams')
			console.log('1: ', this.selectedStreams[0]['name'])
			console.log('2: ', this.selectedStreams[1]['name'])
			this._router.navigate(['/streams/2/' + this.selectedStreams[0]['name'] + '/' + this.selectedStreams[1]['name']])
		} else if(this.selectedStreams.length == 3){
			console.log('launching: 3 streams')
			this._router.navigate(['/streams/3/' + this.selectedStreams[0]['name'] + '/' + this.selectedStreams[1]['name'] + '/' + this.selectedStreams[2]['name']])
		} else if(this.selectedStreams.length == 4){
			console.log('launching: 4 streams')
			this._router.navigate(['/streams/4/' + this.selectedStreams[0]['name'] + '/' + this.selectedStreams[1]['name'] + '/' + this.selectedStreams[2]['name'] + '/' + this.selectedStreams[3]['name']])
		}
		

	}




}


// client id
// s11ya6thibb9x9krl4wy7qbjtm9eqx