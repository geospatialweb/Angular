import { TrailDirective } from './trail.directive';

describe('TrailDirective', () =>
{
    it('should create an instance', () =>
    {
        const directive = new TrailDirective(null, null);
    	expect(directive).toBeTruthy();
    });
});
