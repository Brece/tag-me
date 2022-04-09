import React, { useState, useEffect } from 'react';
import TargetBox from './TargetBox';

const Image = (props) => {
    // TODO: gets chosen image (= index in imageSrc array) as property to display

    const [coordinates, setCoordinates] = useState({x: 25, y: 25});
    const [boxDisplayed, setBoxDisplayed] = useState('none');
    const [image, setImage] = useState({...props.image});

    // TODO: state for correct choices as coordinates as array which is used to render fixed targetBox with character name

    const getMousePosition = (canvas, e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rightBorder = canvas.width;
        const bottomBorder = canvas.height;
        
        // checks for edge cases
        const centerCoord = checkBorder(
            {x,y},
            {rightBorder, bottomBorder}
        );

        setCoordinates({x: centerCoord.x, y: centerCoord.y});
        setBoxDisplayed('block');
    }

    const checkBorder = (coord, borders) => {
        let {x, y} = coord;
        const {rightBorder, bottomBorder} = borders;

        // target box width/height is 50px, so it's center has to be corrected at near the borders
        if (x < 25) { x = 25 };
        if (x > rightBorder - 25) { x = rightBorder - 25 }
        if (y < 25) { y = 25 };
        if (y > bottomBorder - 25) { y = bottomBorder - 25 }

        return {x,y};
    }

    useEffect(() => {        
        const canvasElem = document.querySelector('.c-image img');

        if (canvasElem !== null) {
            canvasElem.addEventListener('mousedown', (e) => {
                getMousePosition(canvasElem, e);
            });
        }

        return () => {
            canvasElem.removeEventListener('mousedown', (e) => {
                getMousePosition(canvasElem, e);
            });
        }
    }, []);

    const ImageContainer = () => {
        if (image !== undefined) {
            return (
                <div className='o-wrap c-image'>
                    <img src={image.URL} alt={image.ALT} />
                    <TargetBox coordinates={coordinates} display={boxDisplayed} options={image.OBJECTS} />
                </div>
            )
        }

        return '';
    }

    return <ImageContainer />;
}

export default Image;
