import React from 'react';

import styles from './Game.module.css';
import GameHeader from '../../components/UI/GameHeader/GameHeader';
import Board from '../../components/UI/Board/Board';

const Game = () => {
  return (
    <div className={styles.Game}>
      <div className={styles.GameInnerWrapper}>
        <GameHeader />
        <div className={styles.BoardWrapper}>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Game;
