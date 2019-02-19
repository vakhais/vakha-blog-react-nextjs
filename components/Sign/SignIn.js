import React from 'react';
import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants/index'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "email": "",
            "password": ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSignupButtonClicked = this.onSignupButtonClicked.bind(this);
    }

    render() {
        return (
            <div role="tabpanel" className="tab-pane active" id="signin">
                <ul className="user-dropdown">
                    <div className="login-area">
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Username</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password} />
                        </div>
                    </div>
                    {/* <div className="checkbox">
                        <input id="option" type="checkbox" name="field" value="option" />
                        <label htmlFor="option"><span><span></span></span>Keep me singed in</label>
                        <a href="#none" className="pull-right">Forgot?</a>
                    </div> */}
                    <div className="form-submit">
                            <button type="button" className="btn btn-success btn-block" onClick={this.onSignupButtonClicked}>Sign in</button>
                    </div>
                </ul>
            </div>
        )
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSignupButtonClicked() {
        const { email, password } = this.state

        if (!email) {
            alert('email은 필수입력 입니다.');
            return null
        }

        if (!password) {
            alert('password를 입력하세요.')
            return null;
        }

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        console.log("date:", data)

        const loginRequest = Object.assign({}, data);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            alert("login success!!!!");
            //Alert.success("You're successfully logged in!");
            //console.log("login success!!!!", response);
            // this.props.history.push("/");
        }).catch(error => {
            //Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            alert(error.message);
        });
    }
}

export default SignIn;