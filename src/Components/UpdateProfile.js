import React from 'react';
import './UpdateProfile.css';
import pic from '../Assets/Images/OIP.jpg';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//
const UpdateProfile = () => {

    const navigate = useNavigate();
    const Save = ()=>{
        navigate('/teacherprofile');

    }
    return (
        <div className='container'>
            <div className='greenDiv'>
                <div classname='chobi'>
                    <img className='circularPicture' src={pic} alt="Circular picture" />
                    <p className='name'>Anup Majumder</p>
                </div>


                <div className='buttons'>
                    <div className='bt1'>
                        <button className='viewInvigilations'>View Invigilations</button>
                    </div>
                    <div className='bt2'>
                        <button className='editProfile'>Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className='formDiv'>
                <form className='form'>
                    <input type="text" placeholder="First Name" className="inp" />
                    <input type="text" placeholder="Last Name" className="inp"/>
                    <input type="email" placeholder="Email" className="inp"/>
                    <input type="text" placeholder="Address" className="inp"/>
                    <input type="text" placeholder="Contact Number" className="inp" />
                    <div className="inp1">
                        <button type="submit" className='cancel' >Cancel</button>
                        <button type="reset" className='save' onClick={Save}>Save</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
