import React from 'react';
import {checkGuess} from '../../game-helpers';
import {range} from '../../utils';

function Cell({letter, status}) {
  const className = status ? `cell ${status}` : 'cell';

  return <span className={className}>{letter}</span>;
}

function Guess({guess, answer}) {
  const guessStatus = guess ? checkGuess(guess, answer) : [];

  return (
    <p className="guess">
      {range(5).map((value) => (
        <Cell key={value} letter={guessStatus?.[value]?.letter} status={guessStatus?.[value]?.status} />
      ))}
    </p>
  );
}

export default Guess;
