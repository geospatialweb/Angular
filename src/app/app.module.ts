import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HeaderComponent } from './components/header/header.component';
import { LayersComponent } from './components/layers/layers.component';
import { SplashComponent } from './components/splash/splash.component';
import { TrailsComponent } from './components/trails/trails.component';

import { LayersElementsDirective } from './directives/layerElements/layerElements.directive';
import { SplashDirective } from './directives/splash/splash.directive';

import { DataService } from './services/data/data.service';
import { LayerElementsService } from './services/layerElements/layerElements.service';
import { LayerService } from './services/layer/layer.service';
import { MapService } from './services/map/map.service';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashService } from './services/splash/splash.service';
import { StyleLayersService } from './services/styleLayers/styleLayers.service';
import { TrailsService } from './services/trails/trails.service';

@NgModule({
	declarations: [
		AppComponent,
		CanvasComponent,
		HeaderComponent,
		LayersComponent,
		LayersElementsDirective,
		SplashComponent,
		SplashDirective,
		TrailsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		DataService,
		LayerElementsService,
		LayerService,
		MapService,
		MarkerService,
		MarkerDisplayService,
		SplashService,
		StyleLayersService,
		TrailsService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
