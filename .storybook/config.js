import { addParameters, configure, addDecorator } from '@storybook/react';

import theme from './theme';

import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { htmlDecorator } from './html';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { withInfo } from '@storybook/addon-info';

// addDecorator(withPropsTable);

addDecorator(
	withInfo({
		header: false
	})
);

addDecorator(jsxDecorator);
addDecorator(htmlDecorator);

addDecorator(withKnobs);
addParameters({
	jsx: { skip: 1 },
	html: { skip: 2 },
	options: {
		isFullscreen: false,

		showNav: true,

		showPanel: true,

		panelPosition: 'bottom',

		hierarchySeparator: /\/|\./,

		hierarchyRootSeparator: /\|/,

		sidebarAnimations: true,

		enableShortcuts: true,

		isToolshown: false,
		theme: theme
	}
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
