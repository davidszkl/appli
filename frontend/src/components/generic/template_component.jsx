import { useState } from "react";

import axios from "axios"

import { backend_url } from "../../App"


const TemplateComponent = () => {
    
    const url = `${backend_url}/test`;
    const headers = {
        headers:{"Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*"}
    }

    const handleRequest = (e) => {
        axios.get(url, null, headers)
        .then(res => {
            console.log('a');
        })
        .catch(e => console.log(e));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <p>coucou</p>
            <button onClick={handleRequest}>request</button>
            <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default TemplateComponent