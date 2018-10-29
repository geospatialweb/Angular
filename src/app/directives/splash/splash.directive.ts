import { Directive, ElementRef, OnInit } from '@angular/core';
import { SplashService } from '../../services/splash/splash.service';

@Directive({
	selector: '[splash]'
})

export class SplashDirective implements OnInit
{
	constructor(private el: ElementRef,
				private splashService: SplashService)
	{ }

	public ngOnInit(): void
	{
		this.splashService.nativeElement(this.el.nativeElement);
	}
}
