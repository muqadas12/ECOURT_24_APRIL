import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Input from '../../components/Common/input';
import axios from 'axios'
const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/addUser',
            data: {
                name: name,
                email: email,
                password: password,
                type: props.location.state.name,
                phone: phone,
                address: address,
                city: city
            }
        }).then(res => {
            if (res.status === 400) {
                alert("Email already exist")
            } else {
                alert("User added")
            }
        }).catch(err => {
            alert("User Already Exist")
        });
    }
    return (
        <>
           
            <div className='login-page'>
                <div className='row'>
                    <div className='col-md-3'></div>

                    <div className='col-md-6 login-page-form'>
                        <h1>Add new {props.location.state.name}</h1>


                        <form onSubmit={handleSubmit}>
                            <Input
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            // error={errors.name}
                            />

                            <Input
                                type='text'
                                placeholder='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            // error={errors.username}
                            />

                            <Input
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            // error={errors.password}
                            />
                            <Input
                                type='text'
                                placeholder='phone'
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            // error={errors.password}
                            />
                            <Input
                                type='text'
                                placeholder='address'
                                name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            // error={errors.password}
                            />
                            <Input
                                type='text'
                                placeholder='city'
                                name='city'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            // error={errors.password}
                            />
                            <button
                                // disabled={this.validate() || isProcessing}
                                className='login-btn continue-to-shipping'
                            >
                                Add {props.location.state.name}
                            </button>
                        </form>
                    </div>

                    <div className='col-md-3'></div>
                </div>
            </div>
         
        </>
    );
}

export default Register;