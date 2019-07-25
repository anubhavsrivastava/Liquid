/* eslint-disable no-undef */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { text, boolean, number } from '@storybook/addon-knobs';

// import { Welcome } from '@storybook/react/demo';
import Button from '../src/components/Button';
// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
	.add('with text', () => <Button disabled={boolean('Disabled', false)} onClick={action('clicked')} value={text('Label', 'Hello Storybook')} />)
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));
