import { Grid } from '@mui/material';
import FacebookLoginButton from './FbButton.component';
import GoogleLoginButton from './GoogleButton.component';
import LoginForm from './LoginSignUpForm.component';
import './LoginSignUp.styles.scss';

const LoginSignUp = () =>{
    return(
        <div className='login-singup-container'>
            {/* <header>
                <h1>Login/SignUp</h1>
            </header> */}
            <Grid container>
                <Grid item xs={12} md={6} p={2} className='login-others'>
                    <div className="facebook-button">
                        <FacebookLoginButton/>
                    </div>
                    <div className="google-button">
                        <GoogleLoginButton/>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} p={2}>
                <LoginForm/>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginSignUp;