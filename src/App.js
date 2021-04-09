import React, {useState, Row, Col} from 'react';
import Data from './Data';
import './App.css';






function App() {

    const [value, setValue] = useState(Data);
    return (
      <>
      {
        value.map((person) => {
          const {id, name, bd,img} = person;
          return (
            <div>
            
            <img src={img} style={{height:"100px", width:"100px", borderRadius:'45px'}}></img>
          
            
              <h1>{name}</h1>
              <h2>{bd}</h2>
              
              
            </div>
          )
        })
      }
      <button type="button" onClick={() => setValue([])} style={{width:"500px",height:"50px", backgroundColor:"black",color:"white",paddingBottom:"75px", marginBottom:"25px" }}><h1> Delete</h1> </button>
      </>
    )

}


export default App;
