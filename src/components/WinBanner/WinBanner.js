import React from 'react';

function WinBanner({numGuesses}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          &nbsp;{numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
    </div>
  );
}

export default WinBanner;
