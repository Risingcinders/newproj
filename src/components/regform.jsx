import React, { useState } from "react";
import "./foundation.modules.css";
import './styles.modules.css'

const RegistrationForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    

    const calcform = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log(newUser);
    };
    return (
        <div className="main">
            <form onSubmit={calcform}>
                <label htmlFor="">
                    First Name:
                    <input
                        type="text"
                        onChange={(e) => {
                            setFirstName(e.target.value); 
                        }}
                    />
                    { firstName.length < 2 && firstName.length >0 ? <p className='error'>First Name must be at least 2 characters</p> : ''}
                </label>
                <label htmlFor="">
                    Last Name:
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    { lastName.length < 2 && lastName.length >0 ? <p>Last Name must be at least 2 characters</p> : ''}
                </label>
                <label htmlFor="">
                    Email Address:
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    { email.length < 5 && email.length >0 ? <p>Email must be at least 5 characters</p> : ''}
                </label>
                <label htmlFor="">
                    Password:
                    <input
                        type="password" id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    { password.length < 8 && password.length >0 ? <p>Password must be at least 8 characters</p> : ''}
                </label>
                <label htmlFor="">
                    Confirm Password:
                    <input type="password" id="passconfirm" onChange={ (e) => setConfirmPass(e.target.value)} />
                    { password != confirmPass ? <p>Passwords must matchy</p> : ''  }
                </label>
                <input type="submit" value="Update Form" />
            </form>
            <ul>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
            </ul>
        </div>
    );
};

export default RegistrationForm;
