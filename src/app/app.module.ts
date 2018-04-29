import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayersComponent } from './components/layers/layers.component';
import { MapCanvasComponent } from './components/map-canvas/map-canvas.component';
import { SplashComponent } from './components/splash/splash.component';
import { TrailsComponent } from './components/trails/trails.component';

import { LayersDirective } from './directives/layers.directive';
import { SplashDirective } from './directives/splash.directive';

import { LayerService } from './services/layer.service';
import { MapService } from './services/map.service';
import { MarkerService, MarkerDisplayService } from './services/marker.service';
import { SplashService } from './services/splash.service';

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
		LayerService,
		MapService,
		MarkerService,
		MarkerDisplayService,
		SplashService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
