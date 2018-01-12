import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';
import PropTypes from 'prop-types';

const propTypes = {
  isChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.number
  ] ).isRequired
}

/**
 * Class
 * @extends React.Component
 */
class RadioButton extends Component {

  /**
   * Create a RadioButton
   */
  constructor( props ){
    super( props );
  }

  /**
   * Renders the RadioButton component
   */
  render() {

    const {
      children,
      id,
      name,
      value,
      isChecked,
      onChange,
      onClick
    } = this.props;

    let opts = {};
    opts['defaultChecked'] = isChecked;
   
    if ( onChange && typeof onChange === 'function' ) {
      opts['onChange'] = onChange;
    }
    if ( onClick && typeof onClick === 'function' ) {
      opts['onClick'] = onClick;
    }

    return (
      <div className='RadioButton'>
        <div className='form-radio'>
          <input
            type='radio'
            className='form--control'
            value={ value }
            id={ id }
            name={ name }
            { ...opts }
          />
          <label htmlFor={ id } className='form--label'>
            { children }
          </label>
        </div>
      </div>
    );
  }
}

RadioButton.propTypes = propTypes;

export default RadioButton ;

