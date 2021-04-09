import React, {useState} from 'react';
import Data from './Data';

function Dbutton() {
    const [studentData, setStudentData] = useState(Data);
    return (
        <button type="button" onClick={() => setStudentData([])}>Delete</button>
    )
}

export default Dbutton