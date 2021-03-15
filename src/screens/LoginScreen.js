import React, {useState , useEffect} from 'react'
import './LoginScreen.css'
import {Link} from 'react-router-dom'
import {userLogin} from '../actions/userAction'
import {useDispatch , useSelector} from 'react-redux'


const LoginScreen = ({history}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();


  const {userInfo , error} = useSelector(state => state.userLogin);

 


  const handleSubmit = (e) =>{

    e.preventDefault();
    console.log({email ,password})
    dispatch(userLogin(email , password));
   
    // if(userInfo)
    // {
    //   histor.push('/user');              In case , you want to redirect the page to somewhere
    // }
      
  }


    return (
    
    <div className = "form-container">

    <h1>Log In</h1>
        
    <form className = 'form' onSubmit={handleSubmit}>
      
      <label>Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    
     <button type = 'submit'>Log In</button>
    </form>
    
    <h4>New User? <Link to = '/register' style ={{color:'black'}}>Register</Link></h4>
    
     </div>
    )
}

export default LoginScreen