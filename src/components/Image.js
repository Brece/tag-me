import React, { useEffect } from 'react';
import { imageSrc } from '../helpers/imageSrc';
import TargetBox from './TargetBox';

/*
Server side in Firebase:
    -   upload image on firebase or host it somewhere and add an 'URL' key in image object
    -   compare clicked coordinate with the ones stored in the database
    -   store picked image data in component's state
    -   structure: [
        {
            IMAGE_ID: xxx,
            URL: 'xxx',
            OBJECTS: [
                {
                    CHAR_NAME: 'xxx',
                    COORD_X: [12, 34],
                    COORD_Y: [62, 84],
                    DISPLAY: false
                },
                ...
            ]
        },
        ...
    ]
*/

const Image = (props) => {
    // TODO: gets chosen image (= index in imageSrc array) as property to display

    const handleClick = (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('isSelected');
    }

    const getMousePosition = (canvas, e) => {
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        console.log("Coordinate x: " + x, 
                    "Coordinate y: " + y);
    }

    useEffect(() => {
        const canvasElem = document.querySelector('.c-image');
        canvasElem.addEventListener('mousedown', (e) => {
            getMousePosition(canvasElem, e);
        });

        return () => {
            canvasElem.removeEventListener('mousedown', (e) => {
                getMousePosition(canvasElem, e);
            });
        }
    });

    return (
        <div className='o-wrap c-image'>
            <img src={imageSrc[0].url} alt={imageSrc[0].alt} useMap='#view' />
            <map name='view' className='c-image__map'>
                <div className='c-image__map__area' onClick={handleClick} >
                    <area shape='rect' coords='0,0,50,50' alt='Character one' />
                </div>
                <div className='c-image__map__area' onClick={handleClick} >
                    <area shape='rect' coords='200,200,50,50' alt='Character one' />
                </div>
            </map>
            <TargetBox centerCoord='area coords' />
        </div>
    );
}

export default Image;
