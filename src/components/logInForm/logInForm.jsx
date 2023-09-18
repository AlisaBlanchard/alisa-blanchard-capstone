import { Link } from 'react-router-dom';
import '../logInForm/logInForm.scss';
import LogIn from '../logIn/logIn';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';


//Log In Form Component

function LogInForm({visibilityHandler, handleLogout, user, setUser}) {

    // const clientId = "202998095993-qj92550c2un8c7i5mp399nm73osnmr1e.apps.googleusercontent.com";

    // useEffect(() => {
    //   function start() {
    //     gapi.auth2.init({
    //       clientId: clientId,
    //       scope: ""
    //     })
    //   };
  
    //   gapi.load('client:auth2', start);
    // }, []) 
  
    return(
        <section className="logIn">
            <div className="close__wrap"> 
                <h2>Sign In</h2>
                <Link to='/' onClick={visibilityHandler}>
                    <img src="#" alt="X icon" />
                </Link>
            </div>

            <form action="submit">
                <p>Become a member today!</p>

                <label htmlFor="Email" >Email</label>
                <input type="text" className='email'/>

                <label htmlFor="Password">Password</label>
                <input type="text" className='password'/>

                <div className="button__wrap">
                    <button className="signIn" type='submit'>Sign In</button>
                    <button className="signOut" onClick={handleLogout}>Sign Out</button>
                    <Link to="http://localhost:5050/auth/google">
                        {<LogIn />}
                    </Link>
                </div>
            </form>
        </section>

    )
}

export default LogInForm;