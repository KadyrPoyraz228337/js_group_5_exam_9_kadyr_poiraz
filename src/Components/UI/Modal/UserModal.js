import React from 'react';
import './userModal.css';
import {Button} from "reactstrap";
import Backdrop from "../Backdrop/Backdrop";

const userModal = (
    {children, isOpen, toggle}
) => {
    return (
        <>
            <div className={`${isOpen && 'isOpen'} userModal border rounded bg-light p-3`}>
                <div className='d-flex'>
                    <Button className='ml-auto' onClick={() => toggle(false)}>X</Button>
                </div>
                {children}
            </div>
            <Backdrop show={isOpen} toggle={toggle}/>
        </>
    );
};

export default userModal;