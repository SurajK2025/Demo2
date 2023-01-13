import { useEffect, useState } from "react";
import axios from 'axios';

const DisplayData = (props) => {
    const [apiData, setApiData] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:8081/')
                .then(response => { setApiData(response.data) });
        }
    )

    

    var tablerows = apiData.map(obj => {
        return (
            <tr>
                <td>{obj.rollno}</td>
                <td>{obj.name}</td>
                <td>{obj.course}</td>
                <td>{obj.doa}</td>
                <td>{obj.marks}</td>
                <td>{obj.phone}</td>
            </tr>
        );
    });

    return (
        <>
            <br/><br/>
            <table id="studentsTable">
                <tr>
                    <td>RollNo</td>
                    <td>Name</td>
                    <td>Course</td>
                    <td>Doa</td>
                    <td>Marks</td>
                    <td>Phone</td>
                </tr>
                {tablerows}
            </table>
        </>
    );

}
export default DisplayData;