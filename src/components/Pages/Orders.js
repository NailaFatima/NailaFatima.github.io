import React,{useState, useEffect} from 'react';
import Axios from 'axios';

const Orders = () =>{
	// const [orderlist,setOrderList]=useState([])
	// useEffect(()=>{
 //      loadOrder();
	// },[]);
	// const loadOrder= async ()=>{
	// 	const res= await Axios.get("http://localhost:3003/orderlist");
	// 	// setOrderList(res.data);
	// };
	return(
	   <div className="col-md-10 w-75 mx-auto shadow p-5">
	   	<h1 className="text-center mt-4">Order</h1> 
	   	<div className="d-flex">
	   		
	   		<label>Parient Name: </label>
	   		<label>Order Id: </label>
	   		
	   	</div>
	   	<table className='table border shadow'>
			  <thead className='thead-dark'>
			    <tr>
			      
			      <th scope="col">Medicine</th>
			      <th scope="col">Quantity</th>
			      <th scope="col">Price</th>
			      
			    </tr>
			  </thead>
			  {/* {loadOrder.map((or)=>{ */}
			  {/* 	<tr>{or.}</tr> */}
			  {/* 	})} */}
			  
		  </table>	
	   	</div>
        );
}

export default Orders;