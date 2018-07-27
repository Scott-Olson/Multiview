import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { WindowComponent } from './window/window.component';
import { TwoFrameComponent } from './two-frame/two-frame.component';
import { ThreeFrameComponent } from './three-frame/three-frame.component';
import { FourFrameComponent } from './four-frame/four-frame.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
	{ path: 'streams/4/:first/:second/:third/:fourth', component: FourFrameComponent}, 
	{ path: 'streams/3/:first/:second/:third', component: ThreeFrameComponent}, 
	{ path: 'streams/2/:first/:second', component: TwoFrameComponent},  
	{ path: 'streams', component: LandingComponent},
	{ path: '', pathMatch: 'full', redirectTo: '/streams'},
	{ path: '**', redirectTo:'/streams'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
