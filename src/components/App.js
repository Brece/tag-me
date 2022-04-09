import React, { useState } from 'react';
import Header from './Header';
import Image from './Image';
import { getImage } from '../firebase';

const App = () => {
    // TODO: state for selected image to be displayed in Image component
    const [selected, setSelected] = useState('');
    const [image, setImage] = useState({});

    const handleChange = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');
        setImage(await getImage(selected));
    }

    return (
        <div className='c-app'>
            <Header handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Image image={image}/>
        </div>
    );
}

export default App;
