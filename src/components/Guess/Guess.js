import React from 'react';
import {range} from '../../utils';

function Guess({guess}) {
  return (
    <p className="guess">
      {range(5).map((value) => (
        <span className="cell" key={value}>
          {guess?.[value]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
