import { GoogleLogin } from '@react-oauth/google';

//Google Log in button 

function LogIn() {

    return(
        <div id='signInButton'>
            
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed')
                }}
                useOneTap
            />
        </div>
    )
}

export default LogIn;