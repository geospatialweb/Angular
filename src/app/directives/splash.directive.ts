import { Directive, ElementRef, OnInit } from '@angular/core';
import { SplashService } from '../services/splash.service';

@Directive({
	selector: '[appSplash]'
})

export class SplashDirective implements OnInit
{
	constructor(private el: ElementRef,
				private splashService: SplashService)
	{ }

	ngOnInit(): void
	{
		this.splashService.splashElement = this.el.nativeElement;
	}
}
