import { useState } from "react";
import axios from 'axios';

const SendData = (props) => {
    const [apiData, setApiData] = useState({rollno:"",name:"",course:"",doa:"",marks:"",phone:""});
    
    const savedata = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/adduser', apiData);
    }

    const handleChange=(event)=>{
        const {name,value} =event.target
        setApiData({...apiData,[name]:value})

    }

    return (
        <>
            <br/><br/>
            <h4>Add new user</h4>
            <form method="POST" onSubmit={savedata}>
                <input type="text" name="rollno" onChange={handleChange} placeholder="Rollno"/>
                <input type="text" name="name" onChange={handleChange} placeholder="Name"/>
                <input type="text" name="course" onChange={handleChange} placeholder="Course"/>
                <input type="text" name="doa" onChange={handleChange} placeholder="Doa"/>
                <input type="text" name="marks" onChange={handleChange} placeholder="Marks"/>
                <input type="text" name="phone" onChange={handleChange} placeholder="PhoneNumber"/>
                <input type="Submit"/>
            </form>
        </>
    );

}
export default SendData;