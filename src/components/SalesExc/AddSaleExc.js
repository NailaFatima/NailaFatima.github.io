import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const AddSaleExc= ()=>{
  let navigate =useNavigate();
 const [emps,setEmp]=useState({
  name:"",
  lname:"",
  gender:"",
  dob:"",
  experience:""  
   });
 // eslint-disable-next-line
 const { name, lname, gender, dob, experience } =emps;
 const onInputChange= e =>{
    setEmp({ ...emps, [e.target.name]: e.target.value });
 };

 const onSubmit= async e =>
 {
  e.preventDefault();
   await Axios.post("http://localhost:3003/salesmen", emps);
  navigate("/Sales");
 };

return (
	
      <div className="col-md-10 main">
        <h2 className="text-center mb-4">Add  Sales Executive</h2>
        <form className="w-75 mx-auto shadow p-5" onSubmit={e=>onSubmit(e)}>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Last Name"
              name="lname"
              value={lname}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            {/* <input */}
            {/*   type="radio" */}
            {/*   className="form-control form-control-lg " */}
            {/*   placeholder="Enter Gender" */}
            {/*   name="gender" */}
            {/*   value={gender} */}
            {/*   onChange={e=>onInputChange(e)}              */}
            {/*    */}
            {/* /> */}
            <input type="radio" id="male" 
              name="gender" 
              value="male"
              checked={emps.gender==="male"}
              onChange={e=>onInputChange(e)} 
              />
            <label for="male">Male</label>
            <input type="radio" id="female" 
            name="gender" 
            value="female"
            checked={emps.gender==="female"}
            onChange={e=>onInputChange(e)} 
          />
            <label for="female">Female</label>
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="date"
              className="form-control form-control-lg "
              placeholder="Enter Date of Birth"
              name="dob"
              value={dob}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Experience in Years"
              name="experience"
              value={experience}
              onChange={e=>onInputChange(e)}
              
              
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block mt-4 mb-4" >Add Employee</button>
        </form>
      </div>
    
	)
};

export default AddSaleExc;