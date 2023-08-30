import '../logIn/logIn.scss';

//Log In Component

function LogIn() {
    return(
        <section className="logIn">
            <div className="close__wrap">
                <h2>Sign In</h2>
                <img src="#" alt="X icon" />
            </div>

            <form action="submit">
                <p>Become a member today!</p>

                <label htmlFor="Email" >Email</label>
                <input type="text" className='email'/>

                <label htmlFor="Password">Password</label>
                <input type="text" className='password'/>

                <button className="signIn" type='submit'>Sign In</button>
                <button className="signUp">Sign Up</button>
            </form>
        </section>
    )
}

export default LogIn;