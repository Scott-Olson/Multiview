import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class LandingService {

	constructor(private _http: HttpClient) { }

	topTen(): any{
		console.log('in top ten service');
		return this._http.get('https://api.twitch.tv/kraken/streams?limit=10', {headers: {'Client-ID':'s11ya6thibb9x9krl4wy7qbjtm9eqx'}})
	}

	searchStream(name:string, status: any): any{
		console.log('getting stream results for: ', name);
		return this._http.get('https://api.twitch.tv/kraken/search/channels?query=' + name, {headers: {'Client-ID': 's11ya6thibb9x9krl4wy7qbjtm9eqx'}})
	}

	searchStreamLive(name:string): any{
		return this._http.get('https://api.twitch.tv/kraken/search/streams?query=' + name, {headers: {'Client-ID': 's11ya6thibb9x9krl4wy7qbjtm9eqx'}})
	}
}


// client id
// s11ya6thibb9x9krl4wy7qbjtm9eqx