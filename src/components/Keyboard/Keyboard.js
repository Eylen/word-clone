import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({letter, status}) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({guesses}) {
  const letterStatus = getStatusByLetter(guesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard__row" key={index}>
          {row.map((key) => (
            <div className={`keyboard__letter ${letterStatus[key] || ''}`} key={key}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
