import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

//components
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { WindowComponent } from './window/window.component';
import { TwoFrameComponent } from './two-frame/two-frame.component';
import { ThreeFrameComponent } from './three-frame/three-frame.component';
import { FourFrameComponent } from './four-frame/four-frame.component';
import { LandingComponent } from './landing/landing.component';

//services
import { BaseService } from './base.service';
import { LandingService } from './landing/landing.service'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    WindowComponent,
    TwoFrameComponent,
    ThreeFrameComponent,
    FourFrameComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BaseService, LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
