import React from 'react';

function Form(props) {
    return (
        <div>
            <form onSubmit={props.getWeather} className='formStyle'>
                <input
                    type='text'
                    name='city'
                    placeholder='City'
                    className='formInput'
                />
                <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    className='formInput'
                />
                <button className='formButton'>
                    <div className='searchIcon'>&#9906;</div>
                </button>
            </form>
        </div>
    );
}

export default Form;
