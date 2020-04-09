import React, { useState, useEffect, useRef } from 'react';

import styles from './Form.module.css';
import Button from '../../components/UI/Button/Button';

const Form = (props) => {
  const [playerName, setPlayerName] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: '/game',
      search: `?playername=${playerName}`,
    });
  };
  return (
    <div className={styles.Form}>
      <header>Tic Tac Toe</header>
      <form onSubmit={handleSubmit}>
        <label>
          Player Name
          <input
            ref={ref}
            type="text"
            name="username"
            placeholder="Enter player name"
            value={playerName}
            onChange={handleChange}
          />
        </label>
        <Button>Join</Button>
      </form>
    </div>
  );
};

export default Form;
