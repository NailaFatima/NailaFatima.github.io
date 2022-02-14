import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
	const [meds,setMeds]=useState([]);

	useEffect(()=>{
		loadMeds();
	},[]);

	const loadMeds= async ()=>{
		const res= await Axios.get("http://localhost:3003/meds");
		
		setMeds(res.data.reverse());	
		// console.log(res.data);
	};

	const deleteMed = async (id) => {
		if(window.confirm("Are You Sure You want to Delete It"))
			{
	    await Axios.delete(`http://localhost:3003/meds/${id}`);
		loadMeds();
	       }
	};
	
	return(		 
	    <div className="col-md-10 main">
	   	
	   	    <h2 className="text-center mt-4">Inventory</h2>
	   	    <Link className="btn btn-outline-secondary mt-3 mb-3" to={'/Inventory/AddInventory'}>Add Inventory</Link>
          <table className='table border shadow'>
			  <thead className='thead-dark'>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Medicine</th>
			      <th scope="col">Manufacturer Name</th>
			      <th scope="col">Price</th>
			      <th scope="col">Stock</th>
			      <th scope="col">Discount(%)</th>
			      <th>Action</th>
			    </tr>
			  </thead>
		  		<tbody>		
		  		     { meds.map(( med, index)=> (

		  			<tr> 				
		  			  <td scope="row">{index + 1}</td>
				      <td>{med.medicine}</td>
				      <td>{med.manufacturer}</td>
				      <td>{med.price}</td>
				      <td>{med.stock}</td>
				      <td>{med.discount}</td>
				      <td>
				      	
				      	<Link className="btn btn-outline-primary" to={`/Inventory/UpdateInventory/${med.id}`}>Edit </Link>
				      	<Link className="btn btn-outline-primary" to={'/'} onClick={()=>deleteMed(med.id)}> Delete </Link>
				      </td>
				    </tr>
		  			
		  			))}          
                </tbody>
  	          </table>
  	</div>
        );
};

export default Home;