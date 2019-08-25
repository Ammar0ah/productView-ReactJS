import React from "react";
// import Joi from "joi-browser";
import { Route, Link } from 'react-router-dom'
// import { connect } from 'react-redux'

// import {Alert} from 'rsuite'

import Form from "./form";
import Signup from './registerForm'
import styles from './divider.module.css'

class SignIn extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    token: "",
    route: false
  };

  schema = {
    // email: Joi.string()
    //   .email()
    //   .required()
    //   .label("Email"),
    // password: Joi.string()
    //   .required()
    //   .label("Password")
  };

  doSubmit = async () => {

    //   const { email, password } = this.state.data
    //   await this.props.authSignIn(email, password)
    //   const user = decodeUser();
    //   console.log(user)
    //   this.props.currentUser(user)
    //   if(this.props.error){
    //     Alert.error(this.props.error)
    //   }
    //  else
    //   this.props.history.push('/surveys')
  };
  onNavigate = () => {
    this.setState({ route: true })
  }
  render() {
    return (
      <React.Fragment>

        <div className="container" style={{ marginTop: '50px' }}>
      
              <div className={styles.formLayout}>
                {this.state.route ? "" :
                  <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                      <h1 style={{ marginLeft: '10px' }}>Sign In</h1>
                      {this.renderInput("email", "Email")}
                      {this.renderInput("password", "Password", "password")}
                      {this.renderButton("Sign in")}
                    </form>
                    <label style={{ float: "right", cursor: 'default' }}>Don't have an account?   <Link to="/signup" onClick={this.onNavigate}>Sign Up</Link>  </label>
                  </React.Fragment>
                }
              </div>
            </div>
         

      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
})

export default (SignIn);
