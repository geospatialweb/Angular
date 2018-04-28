import { Directive, ElementRef } from '@angular/core';
import SplashService from '../../providers/splash.service';

@Directive({
	selector: '[splash]'
})

export default class SplashDirective
{
	constructor(private el: ElementRef,
				private splashService:SplashService)
	{ }

	private ngOnInit(): void
	{
		this.splashService.splashElement = this.el.nativeElement;
	}
}
