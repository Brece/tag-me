import React from 'react';
import { imageSrc } from '../helpers/imageSrc';
import TargetBox from './TargetBox';

const Image = (props) => {
    // TODO: gets chosen image (= index in imageSrc array) as property to display
    const handleClick = (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('isSelected');
    }
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
