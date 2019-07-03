import React from "react";

export function Counter(props) {
  return (
    <div className="Counter" onClick={props.increment}>
      {props.count}
    </div>
  );
}
