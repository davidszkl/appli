import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import PartyTitleForm from './party_title';


const CreatePartyRoot = () => {
    const [stage, setStage] = useState("title");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const onTitleForm = (e) => {
        setFormData(prev => ({
            ...prev,
            partytitle: e.partytitle, 
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
            navigate('/login');
        })
        .catch(e => {
            console.log(e);
        })

        
    }

    return (
        <>
            {stage === "title" ? <PartyTitleForm onTitleForm={onTitleForm}/> :
             ""}
        </>
    );
}

export default CreatePartyRoot;
