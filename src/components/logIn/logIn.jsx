import { Link } from 'react-router-dom';
import '../logIn/logIn.scss';


//Log In Component

function LogIn({visibilityHandler}) {
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
                    <button className="signUp">Sign Up</button>
                </div>
            </form>
        </section>
    )
}

export default LogIn;