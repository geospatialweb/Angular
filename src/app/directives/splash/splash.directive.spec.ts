import { SplashDirective } from './splash.directive';

describe('SplashDirective', () =>
{
    it('should create an instance', () =>
    {
        const directive = new SplashDirective(null, null);
    	expect(directive).toBeTruthy();
    });
});
