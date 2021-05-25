import {useState} from 'react';
import Category from './Category';
import Shuffle from './Shuffle';
import Draw from './Draw';

const AffirmationDeckForm = (props) => {
    const [formStage, setFormStage] = useState('category');

    let content;
    if (formStage === 'category'){
        content = <Category onSetCategory={setFormStage}/>
    }
    if (formStage === 'shuffle'){
        content = <Shuffle onShuffle={setFormStage}/>
    }
    if (formStage === 'draw'){
        content = <Draw onDraw={props.onDraw}/>
    }

    return <>{content}</>
};

export default AffirmationDeckForm;