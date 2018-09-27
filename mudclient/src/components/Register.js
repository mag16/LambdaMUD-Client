import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';



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
               
            };
            axios.post('https://lambdamud-app.herokuapp.com/api/registration', user)
                .then(response => {
                    console.log(response);
                    //if request received (200)
                    if (response.data.code === 200) {
                        localStorage.setItem('token', response.data.key);
                        this.props.history.push('/');
                    }
                    else {
                        console.log("error", response.data.key);
                    }
                })
                .catch(error => {
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