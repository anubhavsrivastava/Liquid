/* eslint-disable no-undef */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, radios as select } from '@storybook/addon-knobs';

import ProgressBar from '../src/components/ProgressBar';

const colorOption = {
	Red: 'red',
	Orange: 'orange',
	Blue: 'blue'
};

storiesOf('ProgressBar', module).add(
	'with sample progress',
	() => {
		let value = number('Value', 50);
		return (
			<div style={{ width: '50%' }}>
				<ProgressBar color={select('Color', colorOption, 'red')} value={value} max={number('Max', 100)}>
					Loading...
				</ProgressBar>
			</div>
		);
	},
	{
		jsx: {
			skip: 2
		},
		html: {
			skip: 3
		},
		info: {
			excludedPropTypes: ['onClick']
		}
	}
);
