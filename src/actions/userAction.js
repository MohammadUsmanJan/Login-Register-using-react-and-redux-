
import axios from 'axios'


export const userLogin = (email , password) => async(dispatch) => {
    
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        
          const { data } = await axios.post('https://603dc72748171b0017b2da58.mockapi.io/api/v1/login?email=jayant.singh123@gmail.com',{ email, password },config)
        
        dispatch({
            type:'LOG IN',
            payload: data
        })
    }

    catch(e)
    {
        dispatch({
            type:'LOG IN FAILED',
            payload:e
        })
    }
   
}


export const userRegister = (name , email , password , phone , company) => async(dispatch) => {
    
    try{

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }

        const data = await axios.post('https://603dc72748171b0017b2da58.mockapi.io/api/v1/login' , {name , email , password , phone , company}, config)

        dispatch({
            type:'REGISTER',
            payload: data
        })
    }

    catch(e)
    {
        dispatch({
            type:'REGISTER FAILED',
            payload:e
        })
    }
   
}