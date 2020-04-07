import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.css';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <header>Tic Tac Toe</header>
        <form>
          <label>
            Player Name
            <input
              ref={ref}
              type="text"
              name="username"
              placeholder="Enter player name"
              value=""
            />
          </label>
          <button>Join</button>
        </form>
      </div>
    </Router>
  );
}

export default App;
