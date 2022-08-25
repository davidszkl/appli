import { useEffect } from "react";
import axios from "axios"
const Connect = () => {    
    useEffect(() => {
        const url = `http://127.0.0.1:8080/users`;

        axios.get(url)
        .then(({data}) => {
            console.log(data);
        })
    })
};

export default Connect