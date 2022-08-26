import { useState } from 'react';
import UserRegisterForm from './user_register_form';
import UserInfoForm from './user_info_form';
import UserAddressForm from './user_address_form';

const Controller = () => {
    const [stage, setStage] = useState("register");
    const [formData, setFormData] = useState({});

    const onRegisterForm = (e) => {
        setFormData(prev => ({
            ...prev,
            email: e.email, 
            username : e.username,
            password: e.password,
            confirm: e.confirm
        }))
        setStage("info");
    }

    const onInfoForm = (e) => {
        setFormData(prev => ({
            ...prev,
            age: e.age, 
            sex: e.sex,
        }))
        setStage("address");
    }

    const onAddressForm = (e) => {
        setFormData(prev => ({
            ...prev,
            street: e.street,
            nbr: e.nbr,
            zip: e.zip,
            county: e.county,
            country: e.country
        }))
    }

    return (
        <>
            {stage === "register" ? <UserRegisterForm onRegisterForm={onRegisterForm}/> :
             stage === "info" ? <UserInfoForm onInfoForm={onInfoForm}/> :
             <UserAddressForm onAddressForm={onAddressForm}/>}
        </>
    );
}

export default Controller