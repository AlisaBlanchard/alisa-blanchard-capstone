import { GoogleLogin } from '@react-oauth/google';

//Google Log in button 

function LogIn() {

    const clientId = "202998095993-qj92550c2un8c7i5mp399nm73osnmr1e.apps.googleusercontent.com";

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Cureent user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! Cureent user: ", res);
    }

    return(
        <div id='signInButton'>
            {/* <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            /> */}
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