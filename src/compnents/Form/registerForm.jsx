import React from "react";

import { Link, withRouter } from 'react-router-dom';

import Form from "./form";

import styles from './divider.module.css';
class SignUp extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", password: "" },
    errors: {},
    token: {},
    SignUperror: this.props.error,
  };

  schema = {
   

  };

  doSubmit =  () => {
    
  };

  render() {
    return (
      <React.Fragment>
        
        <div className="container" style={{margin: '50px auto' }}>
          <div className="row">
            <div className={styles.registerLayout}>

                <h1 style={{ marginLeft: '10px' }}>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("firstName", "First Name")}
                  {this.renderInput("lastName", "Last Name")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Sign up")}
                </form>
                <label style={{ float: "right", cursor: 'default' }}>Already have an account?   <Link to="/signin">Login</Link>  </label>
              </div>
            </div>
          </div>
      
      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  loading: state.auth.loading
})
export default (SignUp);
