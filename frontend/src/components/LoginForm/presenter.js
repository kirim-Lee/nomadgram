import React from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import formStyles from 'shared/formStyles.scss';

const LoginForm = props => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="text" 
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
            <input type="submit" placeholder="Log in" className={formStyles.button} />
        </form>
        <span className={formStyles.divider}>or</span>
        <span className={formStyles.facebookLink}>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" />
            Log in with Facebook
        </span>
        <span className={formStyles.forgotLink}>Forgot password?</span>
    </div>
);

LoginForm.propTypes={
    usernameValue:PropTypes.string.isRequired,
    passwordValue:PropTypes.string.isRequired,
    handleInputChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired
}
export default LoginForm;