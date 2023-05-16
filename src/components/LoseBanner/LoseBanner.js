import React from 'react';
import Banner from '../Banner';

function LoseBanner({answer, handleRestart}) {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoseBanner;
