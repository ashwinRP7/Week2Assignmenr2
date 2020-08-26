import React from 'react';
import './Seller.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
  } from "react-router-dom";
  
  import SellerList from './SellerList'
  import Product from './Product'
  import Logout from './Logout'
  import Login from './Login'

  class Seller extends React.Component{
      constructor(props){
          super(props);
          const currentUser = localStorage.getItem('currentUser');
          let isLoggedIn = true
          if(currentUser == null){
              isLoggedIn = false
          }

          this.state={
              isLoggedIn,
              cartItem:[]
          }
      }

      addToCart(newItem){
        this.setState({
            cartItem:[...this.state.cartItem,newItem]
        })
        
    }

    removeFromCart(ind){
        this.setState({
            cartItem:[...this.state.cartItem].filter((item)=> item.id!=ind.i)
        });
        //console.log(ind);
    }
      render(){
          if(this.state.isLoggedIn === false){
              return <Redirect to='/'/>
             
          }
          return(
              <Router>
                  <div>
                      
                      <Switch>
                        <Route exact path='/seller'>
                            <SellerList></SellerList>
                        </Route>
                        <Route path='/seller/:sid' children={<Product obj={{array:this.state.cartItem,addToCart:this.addToCart.bind(this),removeFromCart:this.removeFromCart.bind(this)}}></Product>}>

                        </Route>
                        <Route path='/logout' component={Logout}></Route>
                        <Route path='/' component={Login}></Route>
                      </Switch>
                  </div>
              </Router>
          );
      }
  }

  export default Seller;