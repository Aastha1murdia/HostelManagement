import React, { Component } from 'react'
import './Registration.css';
import {Link} from 'react-router-dom';
class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            dname:"",
            mname:"",
            phone:"",
            address:"",
            seater:"",
            year:"",
            gender:""
        }
    }
    handleChangeAll=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    // onsubmit=(event)=>{
    //     alert(`Thank you ${this.state.fname} for booking a room in our Hostel`);
    //     event.preventDefault();
    // }
    render(){
        return (
            <>
            <div className="outer_div">
                <div className="container">
                        <div className="registerform">
                            <h1 className="register">Book Your Room</h1>
                            <form 
                            // onSubmit={this.onsubmit}
                            >
                                <label htmlFor="fname">First Name:</label>
                                <input 
                                    type="text" id="fname" 
                                    name="fname"  value={this.state.fname}
                                    placeholder="Enter Your First Name" 
                                    onChange={this.handleChangeAll} required/>
                                <label htmlFor="lname">Last Name:</label>
                                <input 
                                    type="text" id="lname" 
                                    name="lname" 
                                    value={this.state.lname}  
                                    placeholder="Enter Your Last Name" 
                                    onChange={this.handleChangeAll}                                     
                                required/>
                                <label htmlFor="dname">Father's Name:</label>
                                <input 
                                    type="text" id="dname" 
                                    name="dname" 
                                    value={this.state.dname}  
                                    placeholder="Enter Your Father's Name" required 
                                    onChange={this.handleChangeAll}
                                    />
                                <label htmlFor="mname">Mother's Name</label>
                                <input 
                                    type="text" id="mname" 
                                    name="mname" 
                                    value={this.state.mname}  
                                    placeholder="Enter Your Mother's Name"  
                                    onChange={this.handleChangeAll} 
                                    required/>
                                <label htmlFor="phone">Mobile No.</label>
                                <input 
                                    type="text" id="phone" 
                                    name="phone"  
                                    value={this.state.phone} 
                                    pattern="[789][0-9]{9}" placeholder="Enter Your Mobile Number" 
                                    onChange={this.handleChangeAll}  
                                    required/>
                                <label htmlFor="year">Year:</label>
                                <select  name="year" id="year"
                                value={this.state.year}   onChange={this.handleChangeAll}
                                 required>
                                    <option value="select">--Select One--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <label htmlFor="seater" >Seater:</label>
                                <select name="seater" id="seater"
                                onChange={this.handleChangeAll}
                                 required> 
                                    <option value="select" >--Select One--</option>
                                    <option value="1" >1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label htmlFor="gender">Gender:</label><br/>
                                <input 
                                    type="radio" value="Male" 
                                    name="gender" id="male" onChange={this.handleChangeAll} />
                                <label htmlFor="male">Male</label>
                                <input 
                                    type="radio" value="Female" 
                                    name="gender" id="female" onChange={this.handleChangeAll} />
                                <label htmlFor="female">Female</label>
                                <input 
                                    type="radio" value="other" 
                                    name="gender" id="other" onChange={this.handleChangeAll} />
                                <label htmlFor="other">Other</label><br/>
                                <label htmlFor="address">Permanent Address:</label>
                                <textarea 
                                    name="address" id="address" 
                                    value={this.state.address} 
                                    onChange={this.handleChangeAll}
                                    />
                                    <Link to="/Payment">
                                        <input type="submit" id="submit" name="submit"/>
                                    </Link>

                            </form>           
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Registration























