import React from 'react'; 
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { register } from '../actions';

class Register extends React.Component {
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
        })
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
        .then(() => this.props.history.push('/protected'))
        .catch(error => console.log('register error', error));
    }

   render() {
       if (this.props.registering) 
       return ( 
           <Loader type="Audio" /> 
          )
        else return (
    <div>
        <form onSubmit={this.register}>
                <input type="text" name="username" 
                placeholder="username" 
                value={this.state.credentials.username} 
                onChange={this.handleInput}></input>
                  <input type="password" name="password" 
                placeholder="password" 
                value={this.state.credentials.password} 
                onChange={this.handleInput}></input>
                <button type="submit">register</button>
            </form>
    </div>
       )
   }

}

const mapStateToProps = ( error, registering ) => ({
    error, registering
}); 

export default connect(mapStateToProps, { register })(Register); 