import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		if (this.props.disabled) {
			e.preventDefault();
			return;
		}

		if (this.props.onClick) {
			this.props.onClick(e);
		}
	}

	render() {
		const { value, mode, size, disabled, loading, fluid, className, ...restProps } = this.props;

		let cssClasses = classNames('btn', { [`btn-${mode}`]: true, [`btn-${size}`]: true, [`btn-block`]: fluid }, className);
		return (
			<button className={cssClasses} {...restProps} disabled={disabled} loading={loading} fluid={fluid} size={size} mode={mode}>
				{value}
			</button>
		);
	}
}

Button.propTypes = {
	value: PropTypes.string.isRequired,
	mode: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['regular', 'big']),
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	fluid: PropTypes.bool
};

Button.defaultProps = {
	mode: 'primary',
	size: 'regular'
};
