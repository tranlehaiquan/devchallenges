import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('renderButton', () => {
	const component = renderer.create(
		<Button>ABC</Button>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
