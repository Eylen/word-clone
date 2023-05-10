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

function Game() {
  const [status, setStatus] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({answer});

  const handleSubmit = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  };

  const handleRestart = () => {
    setStatus('');
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guesses={validatedGuesses} />
      <GuessInput handleSubmit={handleSubmit} disabled={!!status} />
      <Keyboard guesses={validatedGuesses} />
      {status === 'won' && <WinBanner numGuesses={guesses.length} handleRestart={handleRestart} />}
      {status === 'lost' && <LoseBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;
