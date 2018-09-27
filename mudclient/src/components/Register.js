import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            }
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);
    }
    handleClick(event, role) {
        let apiBaseUrl = "http://localhost:3000/api/";
        // console.log("values in register handler",role);
        let self = this;
        //To be done:check for empty values before hitting submit
        if (this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0) {
            let user = {
                "username": this.state.username,
                "email": this.state.email,
                "password": this.state.password1,
                "role": role
            }
            axios.post('https://lambdamud-app.herokuapp.com/api/registration', user)
                .then(function (response) {
                    console.log(response);
                    if (response.data.code === 200) {
                        //  console.log("registration successfull");
                        let loginscreen = [];
                        loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role} />);
                        let loginmessage = "Not Registered yet.Go to registration";
                        self.props.parentContext.setState({
                            loginscreen: loginscreen,
                            loginmessage: loginmessage,
                            buttonLabel: "Register",
                            isLogin: true
                        });
                    }
                    else {
                        console.log("some error ocurred", response.data.code);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else {
            alert("Input field value is missing");
        }

    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="User name"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;