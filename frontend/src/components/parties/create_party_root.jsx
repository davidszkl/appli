import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import PartyTitleForm from './party_title_form';
import AddressForm from '../generic/address_form';
import PartyInfoForm from './party_info_form';


const CreatePartyRoot = () => {
    const [stage, setStage] = useState("title");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const onTitleForm = (e) => {
        setFormData(prev => ({
            ...prev,
            partytitle: e.partytitle, 
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
        setStage("info");
    }

    const onInfoForm = (e) => {
        setFormData(prev => ({
            ...prev,
            partytimestart: e.partytimestart,
            partytimeend: e.partytimeend,
            partyagemin: e.partyagemin,
            partyagemax: e.partyagemax,
            partytags: e.partytags,
            partysexes: e.partysexes
        }))

        const headers = {
            headers:{
                'Access-Control-Allow-Origin': "*",
            }
        };
        const url = "http://127.0.0.1:8080/create_party";
        axios.post(url, formData, headers)
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch(e => {
            console.log(e);
        })

        
    }

    return (
        <>
            {stage === "title" ? <PartyTitleForm onTitleForm={onTitleForm}/> :
             stage === "address" ? <AddressForm onAddressForm={onAddressForm}/> :
             stage === "info" ? <PartyInfoForm onInfoForm={onInfoForm}/> :
             ""}
        </>
    );
}

export default CreatePartyRoot;
