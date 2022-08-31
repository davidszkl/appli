import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../../app/authSlice";

import axios from "axios"

import { backend_url } from "../../App"


const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const url = `${backend_url}/profile`;
        const config = {
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + token,
            }
        }
        axios.get(url, config)
        .then(res => {
            setUserData(res.data);
        })
        .catch(e => console.log(e));
    },[token])

    if (userData) {
        return (
            <>
                <h1>Profile</h1>
                <div>
                    <p>username: {userData['username']}</p>
                    <p>age: {userData['userage']}</p>
                    <p>sex: {userData['usersex']['sexname']}</p>
                    <p>address: {userData['useraddress']['addressstreet']}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div>
                In order to see your profile you should <a href="/login">login</a> !
            </div>
        </>
    )
}

export default UserProfile