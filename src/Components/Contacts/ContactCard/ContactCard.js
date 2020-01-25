import React, {useState} from 'react';
import './ContactCard.css'
import UserModal from "../../UI/Modal/UserModal";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const ContactCard = props => {

    const [toggle, setToggle] = useState(false);

    const contactDelete = async () => {
        const userAsw = window.confirm("Are you sure you want to delete the contact "+props.data.name+'?');
        if(userAsw) {
            await props.deleteContact(props.id);
            await props.get();
        }
    };

    return (
        <>
            <div className='border rounded bg-light d-flex p-2 cart my-2 w-75' onClick={() => setToggle(true)}>
                <div className='w-25 overflow-hidden d-flex align-items-center justify-content-center justify-content-center' style={{height: '120px'}}>
                    <img src={props.data.photo} alt="Contact photo" className='w-100 border rounded'/>
                </div>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <h1>{props.data.name}</h1>
                </div>
            </div>
            <UserModal isOpen={toggle} toggle={setToggle}>
                <div className='d-flex mb-2'>
                    <div className='overflow-hidden w-25 h-100 mr-3'>
                        <img src={props.data.photo} alt="" className='w-100 border rounded'/>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <h3>{props.data.name}</h3>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <img src="https://www.shareicon.net/data/2016/05/03/759092_phone_512x512.png" alt="" className='w-auto mr-2' style={{height: '20px'}}/>
                            <p className='m-0'>{props.data.phone}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="https://toppng.com/public/uploads/preview/this-free-icons-png-design-of-mail-ico-11563280528awtfvfkugq.png" alt="" className='w-auto mr-2' style={{height: '20px'}}/>
                            <p className='m-0'>{props.data.email}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button color='success' style={{width: '49.5%', marginRight: '1%'}} tag={Link} to={'edit/'+props.id}>Edit</Button>
                    <Button color='danger' style={{width: '49.5%'}} onClick={() => contactDelete()}>delete</Button>
                </div>
            </UserModal>
        </>
    );
};

export default ContactCard;