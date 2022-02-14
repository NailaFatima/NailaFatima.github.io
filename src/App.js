
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Pages/Home";
import Sales from "./components/Pages/Sales";
import CreateOrder from "./components/Pages/CreateOrder";
import Orders from "./components/Pages/Orders";
import AddInventory from "./components/Inventory/AddInventory";
import AddSaleExc from "./components/SalesExc/AddSaleExc";
import UpdateSale from "./components/SalesExc/UpdateSale";
import UpdateInventory from "./components/Inventory/UpdateInventory";
// import Sidebar from "./components/Layout/Sidebar";
import Login from "./components/Layout/Login";
import SideBarLayout from "./components/Layout/SideBarLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  
  return (
     
     <Router>
     
    <div className="App">
      
      
       
      <Routes>
        
        <Route exact="true" path='/' element={<Login/>} />
      <Route element={<SideBarLayout/>}>
        <Route exact="true" path='/Home' element={<Home/>} />
        <Route exact="true" path='/Inventory/AddInventory' element={<AddInventory/>} />
        <Route exact="true" path='/Inventory/UpdateInventory/:id' element={<UpdateInventory/>} />
        <Route exact="true" path='/Sales' element={<Sales/>} />
        <Route exact="true" path='/SalesExc/AddSaleExc' element={<AddSaleExc/>}/>
        <Route exact="true" path='/SalesExc/UpdateSale/:id' element={<UpdateSale/>}/>
        <Route exact="true" path='/CreateOrder' element={<CreateOrder/>} />
        <Route exact="true" path='/Orders' element={<Orders/>} />
      </Route>
      </Routes>    
     }
    </div>
      </Router>
  );
}

export default App;
