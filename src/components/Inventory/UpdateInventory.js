import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from 'axios';

const UpdateInventory = ()=>{
  let navigate =useNavigate();
  const { id } = useParams();
 const [med,setMed]=useState({
  medicine:"",
  manufacturer:"",
  price:"",
  stock:"",
  discount: ""
   });


 
 const { medicine, manufacturer, price, stock, discount } = med;
 const onInputChange= e =>{
    setMed({ ...med, [e.target.name]: e.target.value });
 };
// eslint-disable-next-line
  useEffect(()=>{
 	loadMeds();
 },[]);

 const onSubmit= async e =>
 {
  e.preventDefault();
   await Axios.put(`http://localhost:3003/meds/${id}`, med);
  navigate("/Home");
 };
 const loadMeds = async () => {
    const result = await Axios.get(`http://localhost:3003/meds/${id}`);
    setMed(result.data);
    
  };


	return(
		<div className="col-md-10 main">
        <h2 className="text-center mb-4">Update  Medicine</h2>
        <form className="w-75 mx-auto shadow p-5" onSubmit={e=>onSubmit(e)}>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Medicine"
              name="medicine"
              value={medicine}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Manufacturer"
              name="manufacturer"
              value={manufacturer}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={e=>onInputChange(e)}
                            
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Stock"
              name="stock"
              value={stock}
              onChange={e=>onInputChange(e)}
              
              
            />
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Discount %"
              name="discount"
              value={discount}
              onChange={e=>onInputChange(e)}
              
              
            />
          </div>
          <button type="submit" className="btn btn-secondary btn-block mt-4 mb-4" >Update</button>
        </form>
      </div>
		);
}
export default UpdateInventory;