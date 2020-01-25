import React from 'react';
import './Backdrop.css'

const Backdrop = (
    {show, toggle}
) => {
    return show && (
        <div className='backdrop' onClick={() => toggle(false)}>

        </div>
    );
};

export default Backdrop;