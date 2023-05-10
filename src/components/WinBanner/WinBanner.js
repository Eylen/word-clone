import React from 'react';
import Banner from '../Banner';

function WinBanner({numGuesses, handleRestart}) {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          &nbsp;{numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinBanner;
