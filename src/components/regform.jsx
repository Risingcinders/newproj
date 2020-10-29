import React, { useState } from "react";
import "./foundation.modules.css";
import './styles.modules.css'

const RegistrationForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Last Name:
                    <input
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Email Address:
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Password:
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label htmlFor="">
                    Confirm Password:
                    <input type="password" />
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
