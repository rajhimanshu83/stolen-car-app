import React, {useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useDispatch,useSelector } from 'react-redux';
import { postComplains } from '../store/actions';
import {useToasts } from 'react-toast-notifications'

import { useInput } from '../utils/inputHook';

const ComplainsPage: React.SFC = () => {
    const dispatch: any = useDispatch();
    const { addToast } = useToasts();
    const { value: customerName, bind: bindCustomerName, reset: resetCustomerName } = useInput('');
    const { value: customerPhoneNumber, bind: bindCustomerPhoneNumber, reset: resetCustomerPhoneNumber } = useInput('');
    const { value: carModelNumber, bind: bindCarModelNumber, reset: resetCarModelNumber} = useInput('');
    const { value: note, bind: bindNote, reset: resetNote } = useInput('');

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(customerName, customerPhoneNumber, carModelNumber, note);
        if(!customerName) {
            addToast("Customer Name is Required", { appearance: 'warning', autoDismiss: true });
            return;
           
        }
        if(!customerPhoneNumber) {
            addToast("Phone Number is Required", { appearance: 'warning', autoDismiss: true });
            return;
           
        }
        if(!carModelNumber) {
            addToast("Car Model is Required", { appearance: 'warning', autoDismiss: true });
            return;
           
        }
        if(!note) {
            addToast("Description is Required", { appearance: 'warning', autoDismiss: true });
            return;
        }

            dispatch(postComplains({ customerName, customerPhoneNumber, carModelNumber, note}));
            addToast("Complain Submitted Succesfully", { appearance: 'success', autoDismiss: true });
            resetCarModelNumber();
            resetCustomerName();
            resetCustomerPhoneNumber();
            resetNote();
    }

    return (
        <>
            <NavBar page="home" />
            <div className="hero-wrap" >
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-start">
                        <div className="col-lg-4 col-md-6 mt-0 mt-md-5">
                                <form action="#" className="request-form ftco-animate" onSubmit={handleSubmit} style={{borderRadius:"50px"}}>
                                    <h2 style={{color:"#007bff"}}>Fill Your Car Details</h2>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your Name"
                                                {...bindCustomerName}  />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Car Model Number"
                                                {...bindCarModelNumber}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" className="form-control" name="number" pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$" placeholder="Enter your Phone Number"
                                                {...bindCustomerPhoneNumber}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter your Compalin" 
                                                {...bindNote}/>
                                            </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-primary py-3 px-4 mt-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-2 col"></div>
                            <div className="col-lg-6 col-md-6 ftco-animate">
                                <h1 className="mb-4" style={{color:"red"}}>Is your car stolen ? <br /><span>WE ARE HERE TO HELP YOU</span></h1>
                            </div>

                        </div>
                    </div>
            </div>
        </>
    )
}

export default ComplainsPage;