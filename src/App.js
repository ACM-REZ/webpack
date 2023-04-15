import styles from './styles.scss';
import React, { useState } from 'react';

const App = () => {
    const [str, setStr] = useState('Write');

    return (
        <div className={styles.app}>
            <p>{str}</p>
            <div>32ssda</div>
            <input value={str} onChange={e => setStr(e.target.value)}></input>
        </div>
    )
}

export default App