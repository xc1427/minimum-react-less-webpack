import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.less';

const App = () => {
  return (
    <div className={styles.container}>
      <h3>Minimum React Demo App</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));