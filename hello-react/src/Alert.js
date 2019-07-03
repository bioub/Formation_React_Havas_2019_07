import React from 'react';
import './Alert.css';

export function Alert(props) {
  return (
    <div className="Alert">
      {props.children}
    </div>
  )
}