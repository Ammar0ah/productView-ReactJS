import React, { Component,Fragment } from 'react';
import {Route,Switch} from 'react-router-dom'
import Store from '../compnents/store/store'
import loginForm from '../compnents/Form/loginForm';
import registerForm from '../compnents/Form/registerForm';
class Main extends Component {
    state = { 
        class:"leftDiv"
     }
    render() { 
        let render = window.location.pathname === '/store'
        
        return ( 

            <Fragment>
                {render ? <Route path='/store' exact component={Store} />:
                <section>

               
              <div className='leftDiv'>
                   
                </div>
                <div className="rightDiv">
                    <Switch>


                        <Route path='/signin' exact component={loginForm} />
                        <Route path='/signup' exact component={registerForm} />
                        <Route path='/' component={loginForm} />
                    </Switch>

                </div>
                    </section>
 }

            </Fragment>
            
          );
    }
}
 
export default Main;