import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Axios from "axios";


const CreateOrder = () =>{
	const [med,setMed]= useState([]);
	const [show,setShow]= useState(false);
	const [medNames,setMedNames] =useState(med);
	const [prsp,setPrsp]= useState({mname:"",qty:""});
	const [pname,setPname]=useState('');
	const [addItem,setAddItem]= useState([]);
	const order= {objects: [addItem,pname]}
	const {mname, qty} = prsp;
	 // const { id, medicine, manufacturer, price, stock, discount } = med;
	 // const[mPrice,setMPrice]=useState('');
	useEffect(()=>{
		const loadMed= async ()=>{
			const res= await Axios.get("http://localhost:3003/meds")
			setMed(res.data);
									
	       };
		loadMed();
	},[]);


	

	const filterMeds = (e) =>{
		setShow(true);
		const search = e.target.value.toLowerCase();
		const searchedMeds= med.filter((m)=> m.medicine.toLowerCase().includes(search));
		// const priceMed= med.filter((m=> m.searchedMeds).map(medPrice=>medPrice.price);
		
		if (search === "") {
		      setMedNames([]);
		    } else {
		      setMedNames(searchedMeds);
		      // setMPrice(priceMed);
		    }
		     onInputChange(e);
	};

	const onInputChange= (e) =>{
    	setPrsp({ ...prsp, [e.target.name]: e.target.value });

        
    };
	
	const onSubmit = (e)=>{
		e.preventDefault();
		setAddItem({ ...addItem, [prsp.mname]: prsp.qty });
		console.log(addItem);
	 	
		
	};
	const handlePName=(e) =>{
		setPname(e.target.value);
	};
	const handleClick=async (e)=>{
		e.preventDefault();
		
		await Axios.post("http://localhost:3003/orderlist",order);
		console.log(order);
		
		
		
	};

	return(
	   <div className="col-md-10">
	   	<h1 className="text-center mt-4">Create Order</h1> 
	   	<div>
	   		<input type="text" className="form-control w-60 text-center disp" placeholder="Enter Patient Name" name="pname" value={pname} onChange={(e)=>handlePName(e)}/>
	   	<form className="w-100 mx-auto shadow p-5" onSubmit={e=>onSubmit(e)}>
	   		<div className="form-group mb-3 mr-sm-2 d-flex">

	   			<input type="text" 
	   			className="form-control input-group dropdown"
              placeholder="Medicine Name"
              name="mname"
              value={mname}
              onChange={(e)=>filterMeds(e)}
             />	
              <input type="number" className="form-control"
              	placeholder="Quantity"
              	name="qty"
              	value={qty}
              	onChange={(e)=>onInputChange(e)}
              	
              />   	
              {/* <input type="number" className="form-control" */}
              {/* 	placeholder="Price/" */}
              {/* 	name="price" */}
              {/* 	// value={Price} */}
              {/* 	disabled */}
              {/* 	 */}
              {/* />   */}
              <button type="submit" className="btn btn-outline-secondary" >Add</button>		
	   		</div>
	   		
	   		{show?<div className="dataList stack-tops">
	   			   		<ul>
	   			   		{medNames.map((m,index)=>(
	   			   			<li className="dataItem" key={m.id}>{m.medicine}</li>
	   			   			))}
	   			   		</ul>
	   			   	</div>:null}
	   			


	   	</form>
	   	<button className="btn btn-outline-secondary disp" onClick={(e)=>handleClick(e)}>Create Order</button>
	   	</div>
	   	{/*  <div className="w-75 mx-auto shadow p-5"> */}
	   	{/*  	<ul> */}
	   	{/*   	 */}
	   	{/*   		<li>{addItem.value}</li> */}
	   	{/*  */}
	   	{/*   		 */}
	   	{/*   		 */}
	   	{/*   	</ul> */}
	   	{/*  </div>  */}
	   	   
	   	
	    </div>
    );
}

export default CreateOrder;