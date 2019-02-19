import React from 'react'
import { signup } from '../../util/APIUtils'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "email": "",
            "password1": "",
            "password2": "",
            "password": ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSignupButtonClicked = this.onSignupButtonClicked.bind(this);
    }

    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="signup">
                <ul className="user-dropdown">
                    <div className="login-area">
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                name="name"
                                onChange={this.handleInputChange}
                                value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
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
                                name="password1" 
                                onChange={this.handleInputChange}
                                value={this.state.password1} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Comfirm Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                name="password2"
                                onChange={this.handleInputChange}
                                value={this.state.password2} />
                        </div>
                    </div>
                    {/* <div className="checkbox">
                        <input id="option1" type="checkbox" name="field" value="option1" />
                        <label htmlFor="option1"><span><span></span></span>I accept Terms and Condition ?</label>
                    </div> */}
                    <div className="form-submit">
                        <button type="button" className="btn btn-success btn-block" onClick={this.onSignupButtonClicked}>Sign up</button>
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
        const { name, email, password1, password2 } = this.state;

        if (!name) {
            alert("이름은 필수입력 입니다.");
            return null;
        }

        if (!email) {
            alert('email은 필수입력 입니다.');
            return null
        }

        if (!password1) {
            alert('password를 입력하세요.')
            return null;
        }

        if (!password2) {
            alert('password 확인을 입력하세요.');
            return null;
        }

        if (password1 !== password2) {
            alert('password가 틀립니다.')
            return null;
        } 

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password1
        }

        const signUpRequest = Object.assign({}, data);

        // TODO: 회원가입 후 처리 필요 
        signup(signUpRequest)
        .then(response => {
            console.log(response)
            alert("sign up success!!!!")
            //this.props.history.push("/login");
        }).catch(error => {
            console.log(error)  
            alert(error.message)
        });
    }
}

export default SignUp;