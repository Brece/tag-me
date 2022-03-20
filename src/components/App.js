import React, { useEffect } from 'react';
import Header from './Header';
import Image from './Image';

const App = () => {
    /*
    const addWindowClickListener = (e) => {
        e.preventDefault();
        const areaContainerElements = document.querySelectorAll('.c-image__map__area');
        console.log(areaContainerElements);
        areaContainerElements.forEach((item) => {
            if (item.classList.contains('isSelected')) {   
                //item.classList.remove('isSelected');
            }
        });
    }

    useEffect(() => {
        document.querySelector('body').addEventListener('click', addWindowClickListener);

        return () => window.removeEventListener('click', addWindowClickListener);
    }, []);
    */

    return (
        <div className='c-app'>
            <Header />
            <Image />
        </div>
    );
}

export default App;
