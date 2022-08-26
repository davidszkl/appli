import { useState } from 'react';
import UserRegisterForm from './user_register_form';
import UserInfoForm from './user_info_form';
import UserAddressForm from './user_address_form';
import axios from 'axios';
import NavBar from './navbar';

const Controller = ({onRegisterUser}) => {
    const [stage, setStage] = useState("register");
    const [formData, setFormData] = useState({});

    const onRegisterForm = (e) => {
        setFormData(prev => ({
            ...prev,
            useremail: e.useremail, 
            username : e.username,
            userpassword: e.userpassword,
            userconfirm: e.userconfirm
        }))
        setStage("info");
    }

    const onInfoForm = (e) => {
        setFormData(prev => ({
            ...prev,
            userage: e.userage, 
            usersex: e.usersex,
        }))
        setStage("address");
    }

    const onAddressForm = (e) => {
        setFormData(prev => ({
            ...prev,
            addressstreet: e.addressstreet,
            addressnbr: e.addressnbr,
            addresszip: e.addresszip,
            addresscounty: e.addresscounty,
            addresscountry: e.addresscountry
        }))

        const headers = {
            headers:{
                'Access-Control-Allow-Origin': "*",
            }
        };
        const url = "http://127.0.0.1:8080/register";
        axios.post(url, formData, headers)
        .then((res) => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })

    }

    return (
        <>
            <NavBar/>
            {stage === "register" ? <UserRegisterForm onRegisterForm={onRegisterForm}/> :
             stage === "info" ? <UserInfoForm onInfoForm={onInfoForm}/> :
             stage === "address" ? <UserAddressForm onAddressForm={onAddressForm}/> :
             ""}
        </>
    );
}

export default Controller