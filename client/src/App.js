import React from 'react';
import './App.css';
import '/home/admin-pc/Desktop/Shopping/client/src/App.scss'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ShoppingDetails from './components/ShoppingDetails';
import AdminAddProducts from './components/adminAddProducts';
import AdminLogin from './components/adminLogin';
import ViewCart from './components/viewCart';
class App extends React.Component{
render(){
  return(
    <Router>
      <Route exact path="/shopDetails" component={ShoppingDetails} />
      <Route exact path="/adminActions/addProducts" component={AdminAddProducts} />
      <Route exact path="/adminLogin" component={AdminLogin} />
      <Route exact path="/viewCart" component={ViewCart} />
    </Router>
  )
}
}
export default App;