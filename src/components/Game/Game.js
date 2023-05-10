import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import WinBanner from '../WinBanner';
import LoseBanner from '../LoseBanner';
import Keyboard from '../Keyboard/Keyboard';
import {checkGuess} from '../../game-helpers';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [status, setStatus] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmit = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guesses={validatedGuesses} />
      <GuessInput handleSubmit={handleSubmit} disabled={!!status} />
      <Keyboard guesses={validatedGuesses} />
      {status === 'won' && <WinBanner numGuesses={guesses.length} />}
      {status === 'lost' && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
