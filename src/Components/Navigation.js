import React from 'react';

import styles from './Navigation.module.css';
import Button from './UI/Button';

const Navigation = (props) => {
    const displaySelectionHandler = (event) => {
        props.onDisplaySelection(event.target.value);
    }
return (
    <div>
        <Button value='home' onClick={displaySelectionHandler} className={props.selectedDisplay === 'home' && 'selected'}>Home</Button>
        <Button value='schedule' onClick={displaySelectionHandler} className={props.selectedDisplay === 'schedule' && 'selected'}>Schedule</Button>
        <Button value='music' onClick={displaySelectionHandler} className={props.selectedDisplay === 'music' && 'selected'}>Music</Button>
        <Button value='gallery' onClick={displaySelectionHandler} className={props.selectedDisplay === 'gallery' && 'selected'}>Pictures
        </Button>
        <Button value='cards' onClick={displaySelectionHandler} className={props.selectedDisplay === 'cards' && 'selected'}>Affirmation Cards</Button>
    </div>
)
}

export default Navigation;