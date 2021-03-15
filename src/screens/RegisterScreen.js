import React, {useState , useEffect} from 'react'
import './RegisterScreen.css'
import {Link} from 'react-router-dom'
import {userRegister} from '../actions/userAction'
import {useDispatch , useSelector} from 'react-redux'


function RegisterScreen({history}) {

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const dispatch = useDispatch();

  const {userInfo , error} = useSelector(state => state.userLogin);


  const handleSubmit = (e) =>{

    e.preventDefault();
    
    dispatch(userRegister(name , email , password , phone , company))
      
  }


    return (
    
    <div className = "form-container">

    <h1>Register</h1>
        
    <form className = 'form' onSubmit={handleSubmit}>
      
    <label>Name</label>
      <input
        type="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
    
    <label>Phone</label>
      <input
        type="phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

    <label>Company</label>
      <input
        type="company"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />


     <button type = 'submit'>Register</button>
    </form>
    
    <h4>Already Member? <Link to = '/login' style = {{color:'black'}}>Log In</Link></h4>
    
     </div>
    )
}

export default RegisterScreen