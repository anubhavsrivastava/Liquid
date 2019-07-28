/* eslint-disable react/no-children-prop */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Progress.scss';

export default class Progress extends React.Component {
	render() {
		const { className, value, max, color, children } = this.props;
		const percent = (value / max) * 100;

		const cssClasses = classNames('progressbar', { [`progressbar-${color}`]: !!color }, className);

		return (
			<div className="progress">
				<div className={cssClasses} style={{ width: `${percent}%` }}>
					{children}
				</div>
			</div>
		);
	}
}

Progress.propTypes = {
	/** The value of progress state */
	value: PropTypes.number,
	/** Maximum possible progress state */
	max: PropTypes.number,
	/** Color of progress bar */
	color: PropTypes.oneOf(['blue', 'orange', 'red'])
};

Progress.defaultProps = {
	value: 0,
	max: 100
};
