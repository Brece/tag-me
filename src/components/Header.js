import React from 'react';

const Header = (props) => {
    return (
        <div className='c-header'>
            <h1>TAG ME!</h1>
            <div className='c-header__selection'>
                <form className='c-header__selection__form' onSubmit={props.handleSubmit}>
                    <label htmlFor='image'>Select Image</label>
                    <select id='image' onChange={props.handleChange}>
                        <option value='none' defaultValue hidden>Select image...</option>
                        <option value='Brown Tabby Cat'>Cat</option>
                        <option value='Dog'>Dog</option>
                    </select>
                    <button type='submit' value='Submit'>Let's Go!</button>
                </form>
            </div>
        </div>
    );
}

export default Header;
