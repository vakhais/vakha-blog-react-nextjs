import React from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp';

class Login extends React.Component {
    render() {
        return (
            <div className="tab-content">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}




export default Login;