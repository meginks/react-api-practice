import React from 'react'; 
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '', 
                password: ''
        }
    }
    }
    handleInput = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
             [e.target.name]: e.target.value 
            }
        });
    }

    login = e => {
        e.preventDefault();
        this.props
        .login(this.state.credentials) 
        .then(() => this.props.history.push('/protected'))
        .catch(err => console.log(err));
    }
     
    render() {
        return (
        <div>
            <form onSubmit={this.login}>
                <input type="text" name="username" 
                placeholder="username" 
                value={this.state.credentials.username} 
                onChange={this.handleInput}></input>
                  <input type="password" name="password" 
                placeholder="password" 
                value={this.state.credentials.password} 
                onChange={this.handleInput}></input>
                <button type="submit">login</button>
            </form>
        </div> )
    }
} 

const mapStateToProps = ( error, loggingIn ) => ({
    error, 
    loggingIn
})

export default connect(mapStateToProps, { login })(Login);