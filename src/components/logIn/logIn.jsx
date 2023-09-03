import { GoogleLogin } from '@react-oauth/google';

//Google Log in button 

function LogIn() {

    const clientId = "202998095993-qj92550c2un8c7i5mp399nm73osnmr1e.apps.googleusercontent.com";

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