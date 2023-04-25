import React from 'react';

function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={`guess-${index}`}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
