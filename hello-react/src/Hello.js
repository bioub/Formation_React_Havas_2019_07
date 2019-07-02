import React from 'react';
import PropTypes from 'prop-types';

export function Hello({ name = '' }) {
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string
};