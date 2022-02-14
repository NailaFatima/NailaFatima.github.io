import React,{useState} from 'react';
const Login = () =>{         
         // const [isSubmitted, setIsSubmitted] = useState(false);
         const [errorMessages, setErrorMessages] = useState({});
        
         const database = [
    {
      username: "test-admin",
      password: "test-admin"
    },
    {
      username: "test-sales",
      password: "test-sales"
    }]
        
        const errors = {
          uname: "invalid username",
          pass: "invalid password"
        };

       
    const handleSubmit=(e)=>{
        e.preventDefault();
        var { uname, pass } = document.forms[0];
        // console.log(uname.value);
        // console.log(pass.value);
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
              if (userData.password !== pass.value) {
                
                setErrorMessages({ name: "pass", message: errors.pass });
              } else {
                // setIsSubmitted(true);
                
                window.location.href="/Home";
              }
    } 
    else {
      
              setErrorMessages({ name: "uname", message: errors.uname });
           }
     
   // {isSubmitted ? <Redirect to="/Home"/> : <Redirect to="/"/>}
           
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );  
  
  
    
    
    return (
        <div id="disp" className="container py-5 h-100">
          <h2 className="text-center mb-4">LOGIN</h2>
        <form className="w-75 mx-auto shadow p-5" style={{backgroundColor: "#9A616D"}} 
            onSubmit={handleSubmit}>
          <div className="form-group mb-3 mr-sm-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Username"             
              name="uname"          
              required
                            
            />
            {renderErrorMessage("uname")}
          </div>
          <div className="form-group mb-3 mr-sm-2">
            <input type="password"
                className="form-control form-control-lg " 
                placeholder="Enter Password" 
                name="pass"
                 required                                        
            />
           </div>
           {renderErrorMessage("pass")}
           <button type="submit" className="btn btn-primary btn-block mt-4 mb-4">Sign In</button>
       </form>
            
            
           
        </div>
        );
         

};
export default Login;