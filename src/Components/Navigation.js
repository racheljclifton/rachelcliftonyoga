import React from 'react';

import styles from './Navigation.module.css';

const Navigation = (props) => {
    const displaySelectionHandler = (event) => {
        props.onDisplaySelection(event.target.value);
    }
return (
    <div>
        <button value='home' onClick={displaySelectionHandler} className={props.selectedDisplay === 'home' && styles.selected}>Home</button>
        <button value='schedule' onClick={displaySelectionHandler} className={props.selectedDisplay === 'schedule' && styles.selected}>Schedule</button>
        <button value='music' onClick={displaySelectionHandler} className={props.selectedDisplay === 'music' && styles.selected}>Music</button>
        <button value='gallery' onClick={displaySelectionHandler} className={props.selectedDisplay === 'gallery' && styles.selected}>Pictures
        </button>
        <button value='cards' onClick={displaySelectionHandler} className={props.selectedDisplay === 'cards' && styles.selected}>Affirmation Cards</button>
    </div>
)
}

export default Navigation;