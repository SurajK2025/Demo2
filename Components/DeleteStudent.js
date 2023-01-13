import { useState } from "react";
import axios from 'axios';

const SendData = (props) => {
    const [apiData, setApiData] = useState({rollno:""});
    
    const deleteStd = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:8081/deleteUser/${apiData.rollno}`);
    }

    const handleChange=(event)=>{
        const {name,value} =event.target
        setApiData({...apiData,[name]:value})
    }

    return (
        <>
            <br/><br/>
            <h4>Enter student's rollno to be deleted.</h4>
            <form method="GET" onSubmit={deleteStd}>
                <input type="text" name="rollno" onChange={handleChange} placeholder="Rollno"/>
                <input type="Submit"/>
            </form>
        </>
    );

}
export default SendData;