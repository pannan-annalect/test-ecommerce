import FacebookLoginButton from './FbButton.component';
import GoogleLoginButton from './GoogleButton.component';
import LoginForm from './LoginSignUpForm.component';
import './LoginSignUp.styles.scss';

const LoginSignUp = () =>{
    return(
        <div className='login-singup-container'>
            <header>
                <h1>Login/SignUp</h1>
            </header>
            <div className='row'>
                <div className="column">
                    <div className="facebook-button">
                    <FacebookLoginButton/>
                    </div>
                    <div className="google-button">
                        <GoogleLoginButton/>
                    </div>
                </div>
                <div className='column'>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp;