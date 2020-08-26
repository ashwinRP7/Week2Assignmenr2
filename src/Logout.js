import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";

  class Logout extends React.Component{
      constructor(props){
          super(props);
          localStorage.removeItem('currentUser');
        }
      render(){
          return(
              <div>
                  Logout page<br></br>
                  <Redirect to='/'/>
              </div>
          );
      }
  }

  export default Logout;