import React, { useState } from 'react';

import styles from './Board.module.css';
import Square from './Square/Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className={styles.Board}>
      {squares.map((square, index) => (
        <Square key={index} />
      ))}
    </div>
  );
};

export default Board;
