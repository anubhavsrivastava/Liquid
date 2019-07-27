/* eslint-disable no-undef */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, radios as select } from '@storybook/addon-knobs';

import Button from '../src/components/Button';

const actionHandler = action('buttonClick');

const mode = {
	Primary: 'primary',
	Secondary: 'secondary'
};

const size = {
	Regular: 'regular',
	Big: 'big'
};

storiesOf('Button', module).add(
	'with text',
	() => {
		return <Button value={text('Label', 'Hello Storybook')} disabled={boolean('Disabled', false)} loading={boolean('Loading', false)} fluid={boolean('Fluid', false)} size={select('Size', size, 'regular')} mode={select('Mode', mode, 'primary')} onClick={e => actionHandler(e)} />;
	},
	{
		info: {
			excludedPropTypes: ['onClick']
		}
	}
);
