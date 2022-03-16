import React from 'react';

// TODO: 
// takes clicked position as props, use that coordinate as center and display the box positioned accordingly with dynamic styling (styled component)
// has transparent div with border and container for character options
// compare if center position is within area coodinates: X_1 <= X_center <= X_2 && Y_1 <= Y_center <= Y_2

const TargetBox = (props) =>{
    const {x, y} = props.coordinates;
    const style = { top: y - 25, left: x - 25 }
    return (
        <div className='c-targetBox' style={style}>
            box xxx
        </div>
    )
}

export default TargetBox;
