import React from 'react';
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';

const SignupForm = props => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>Sign up to see photos and videos from your friends.</h3>
        <button className={formStyles.button}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#fff" />
            with Facebook
        </button>
        <span className={formStyles.divider}>or</span>
        <form className={formStyles.form}>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <input type="username" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" placeholder="Sign up" className={formStyles.button} />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>
        </p>
    </div>
)

export default SignupForm;