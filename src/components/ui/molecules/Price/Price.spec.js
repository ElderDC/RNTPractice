import React from 'react';
import renderer from 'react-test-renderer';
import Price from './Price';

describe('<Price />', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Price />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('has 1 child', () => {
		const tree = renderer.create(<Price />).toJSON();
		expect(tree.children).toHaveLength(1);
	});
});
