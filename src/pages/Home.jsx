// eslint-disable-next-line
import {useState, useEffect} from "react"
import '../css/App.css';

function Home (){
    const [inputs,setInputs]=useState({});
    const [count, setCount]=useState(0)


    function handleChange (event) {
        const name = event.target.name
        const value = event.target.value
        setInputs(values=>({...values, [name]:value}))
    }

    
    function handleSubmit (event){
        event.preventDefault();
        setCount(count+1)
    }


    return (
        <div className="App" >
            
        <h1><code>Welcome to Latracal Park</code> </h1>
            <form onSubmit={handleSubmit}  >
            <label>Enter your name:</label> <br></br>
                <input type='text' name='CarOwner' value={inputs.CarOwner || ""} placeholder="Car Owner's name" onChange={handleChange} required /> <br/>
                
            <label>Vehicle Reg. Number:</label> <br></br>
                <input type='text' name="regno"   value={inputs.regno || ""} placeholder="Registration number" onChange={handleChange}   required /> <br/>
                
                 <input type="submit"/>
                 <br/>
            </form>
            <hr/>
<br/>
<div id= "details">
        <table>
            <caption>Submitted Details</caption>
                <tr>
                <td>Car Owner's name:</td>
                <td className='tdInputs'>{inputs.CarOwner}</td>
                </tr>

                <tr>
                <td>Registration number:</td>
                <td className='tdInputs'>{inputs.regno}</td>
                </tr>

                <tr>
                <td>Number of cars now in park</td>
                <td className='tdcars'>{count}</td>
                </tr>                    
        </table>
        

</div>
<marquee>Kindly register your vehicle by inputing your name and car registration number...</marquee>
        
        </div>
    )
}





export default Home;