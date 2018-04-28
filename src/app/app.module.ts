import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import LayersComponent from './components/layers/layers.component';
import MapCanvasComponent from './components/map-canvas/map-canvas.component';
import SplashComponent from './components/splash/splash.component';
import TrailsComponent from './components/trails/trails.component';

import LayersDirective from './components/layers/layers.directive';
import SplashDirective from './components/splash/splash.directive';

import DisplayMarkerService from './providers/displayMarker.service';
import LayerService from './providers/layer.service';
import MapService from './providers/map.service';
import MarkerService from './providers/marker.service';
import SplashService from './providers/splash.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LayersComponent,
		LayersDirective,
		MapCanvasComponent,
		SplashComponent,
		SplashDirective,
		TrailsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		DisplayMarkerService,
		LayerService,
		MapService,
		MarkerService,
		SplashService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
