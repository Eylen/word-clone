import React from 'react';
import {range} from '../../utils';

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({guess = []}) {
  return (
    <p className="guess">
      {range(5).map((value) => (
        <Cell key={value} letter={guess?.[value]?.letter} status={guess?.[value]?.status} />
      ))}
    </p>
  );
}

export default Guess;
