import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


function App() {
  return (
     <BrowserRouter>
       <Switch>
       <Route exact path = '/register'>
            <RegisterScreen/>
         </Route>
         <Route exact path = '/login'>
            <LoginScreen/>
         </Route>
         <Route exact path = '/login/user'>
         </Route>
       </Switch>
     </BrowserRouter>
     
      
    
  );
}

export default App;