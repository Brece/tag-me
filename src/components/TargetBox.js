import React from 'react';

// TODO: 
// takes clicked position as props, use that coordinate as center and display the box positioned accordingly with dynamic styling (styled component)
// has transparent div with border and container for character options
// compare if center position is within area coodinates: X_1 <= X_center <= X_2 && Y_1 <= Y_center <= Y_2

// option values comes from image database

const TargetBox = (props) =>{
    const {x, y} = props.coordinates;
    const style = { display: props.display, top: y - 25, left: x - 25 }

    // TODO: submit to server
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = e.currentTarget.firstChild.value;
        console.log(value);
    }

    // FIXME: display radio or only the label?
    const renderOptions = () => {
        if (props.options) {
            return (
                props.options.map((item, index) => {
                    return (
                        <div key={index} style={{display: item.DISPLAY ? 'block' : 'none'}} onClick={handleSubmit}>
                        <input type='radio' id={item.CHAR_NAME} name='character' value={item.CHAR_NAME} style={{display: 'none'}} />
                        <label htmlFor={item.CHAR_NAME}>{item.CHAR_NAME}</label>
                    </div>
                    )
                })
            );
        }
    }

    return (
        <div className='c-targetBox' style={style}>
            <form className='c-targetBox__form'>
                {renderOptions()}
            </form>
        </div>
    )
}

export default TargetBox;
