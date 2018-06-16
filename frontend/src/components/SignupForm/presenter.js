import React from 'react';
import PropTypes from 'prop-types';
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
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={props.emailValue} 
                onChange={props.handleInputChange}
            />
            <input 
                type="text" 
                placeholder="Full Name" 
                name="fullname" 
                value={props.nameValue}
                onChange={props.handleInputChange}
            />
            <input 
                type="username" 
                placeholder="Username" 
                name="username" 
                value={props.usernameValue}
                onChange={props.handleInputChange}
            />
            <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={props.passwordValue}
                onChange={props.handleInputChange} 
            />
            <input 
                type="submit" 
                placeholder="Sign up" 
                className={formStyles.button} 
            />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms & Privacy Policy</span>
        </p>
    </div>
)

SignupForm.propTypes={
    emailValue:PropTypes.string.isRequired,
    nameValue:PropTypes.string.isRequired,
    usernameValue:PropTypes.string.isRequired,
    passwordValue:PropTypes.string.isRequired,
    handleInputChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired
}

export default SignupForm;