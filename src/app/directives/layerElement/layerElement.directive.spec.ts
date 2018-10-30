import { LayerElementDirective } from './layerElement.directive';

describe('LayerElementDirective', () =>
{
	it('should create an instance', () =>
	{
		const directive = new LayerElementDirective(null, null);
		expect(directive).toBeTruthy();
	});
});
