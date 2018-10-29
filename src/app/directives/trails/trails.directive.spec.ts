import { TrailsDirective } from './trails.directive';

describe('TrailsDirective', () =>
{
    it('should create an instance', () =>
    {
        const directive = new TrailsDirective(null, null);
    	expect(directive).toBeTruthy();
    });
});
