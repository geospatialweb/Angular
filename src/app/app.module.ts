import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HeaderComponent } from './components/header/header.component';
import { LayerComponent } from './components/layer/layer.component';
import { SplashComponent } from './components/splash/splash.component';
import { TrailComponent } from './components/trail/trail.component';

import { LayerElementDirective } from './directives/layerElement/layerElement.directive';
import { SplashDirective } from './directives/splash/splash.directive';
import { TrailDirective } from './directives/trail/trail.directive';

import { DataService } from './services/data/data.service';
import { LayerService } from './services/layer/layer.service';
import { LayerElementService } from './services/layerElement/layerElement.service';
import { LayerStyleService } from './services/layerStyle/layerStyle.service';
import { MapService } from './services/map/map.service';
import { MarkerService } from './services/marker/marker.service';
import { MarkerDisplayService } from './services/markerDisplay/markerDisplay.service';
import { SplashService } from './services/splash/splash.service';
import { TrailService } from './services/trail/trail.service';

@NgModule({
	declarations: [
		AppComponent,
		CanvasComponent,
		HeaderComponent,
		LayerComponent,
		LayerElementDirective,
		SplashComponent,
		SplashDirective,
		TrailComponent,
		TrailDirective
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [
		DataService,
		LayerService,
		LayerElementService,
		MapService,
		MarkerService,
		MarkerDisplayService,
		SplashService,
		LayerStyleService,
		TrailService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
