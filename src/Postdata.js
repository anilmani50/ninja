
import React, {useState}from 'react';
import axios from 'axios';


function Postdata(props) {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        mobilenumber:""

    })

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });


    }

    const submitHandler = (e) => {
        const { name, email } = details
        e.preventDefault();
        alert(`YOUR ENTER NAME IS ${name} AND YOUR EMAIL IS ${email}`)
        console.log(details)
        axios.post('https://spicy-hub-dac03-default-rtdb.firebaseio.com/details.json',details)
        .then(response=>{alert("data posted")})
        .then(error=>{console.log(error)})
    }



    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <label className='text-danger'>NAME:</label><br />
                    <input type="text" name="name" value={details.name} onChange={handleChange} /><br />
                    <label>EMAIL:</label><br />
                    <input type="email" name="email" value={details.email} onChange={handleChange} /><br />
                    <label>MobileNumber:</label><br />
                    <input type="number" name="mobilenumber" value={details.mobilenumber} onChange={handleChange} /><br />

                    <button className=' btn btn-primary'>submit</button>
                </form>
            </center>
        </div>
    );
}






export default Postdata;