import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


const Sales = () => {
	const [emps,setEmp]=useState([]);

	useEffect(()=>{
		loadEmp();
	},[]);

	const loadEmp= async ()=>{
		const res= await Axios.get("http://localhost:3003/salesmen");
		
		setEmp(res.data.reverse());	
		 
	};

	const deleteEmp = async (id) => {
		if(window.confirm("Are You Sure You want to Delete It"))
			{
	    await Axios.delete(`http://localhost:3003/salesmen/${id}`);
		loadEmp();
	
	       }
	};
	
	return(		 
	    <div className="col-md-10 main">
	   	
	   	    <h2 className="text-center mt-4">Sales Excecutive</h2>
	   	    <Link className="btn btn-outline-secondary mt-3 mb-3" to={'/SalesExc/AddSaleExc'}>Add SalePerson</Link>
          <table className='table border shadow'>
			  <thead className='thead-dark'>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Name</th>
			      <th scope="col">Last Name</th>
			      <th scope="col">Gender</th>
			      <th scope="col">DOB</th>			      
			      <th scope="col">Experience</th>
			      <th>Action</th>
			    </tr>
			  </thead>
		  		<tbody>		
		  		     { emps.map(( emp, index)=> (

		  			<tr key={index}> 				
		  			  <td>{index + 1}</td>
				      <td>{emp.name}</td>
				      <td>{emp.lname}</td>
				      <td>{emp.gender}</td>
				      <td>{emp.dob}</td>
				      <td>{emp.experience}</td>
				      
				      <td>
				      	
				      	<Link className="btn btn-outline-primary" to={`/SalesExc/UpdateSale/${emp.id}`}>Edit </Link>
				      	<Link className="btn btn-outline-primary" to={'/Sales'} onClick={()=>deleteEmp(emp.id)}> Delete </Link>
				      </td>
				    </tr>
		  			
		  			))}          
                </tbody>
  	          </table>
  	</div>
        );
};

export default Sales;