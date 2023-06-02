import FacebookLoginButton from './FbButton.component';
import GoogleLoginButton from './GoogleButton.component';
import './LoginSignUp.styles.scss';
import LoginForm from './LoginSignUpForm.component';

const LoginSignUp = () =>{
    return(
        <div className='login-singup-container'>
            <header>
                <h1>Login</h1>
            </header>
            <div className="login-buttons">
                <div className="facebook-button">
                   <FacebookLoginButton/>
                </div>
                <div className="google-button">
                    <GoogleLoginButton/>
                </div>
            </div>
            <div className='form-container'>
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginSignUp;