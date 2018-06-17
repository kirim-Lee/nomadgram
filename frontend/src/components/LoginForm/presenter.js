import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import formStyles from 'shared/formStyles.scss';
import {Link} from "react-router-dom";

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

        <FacebookLogin
            appId="2105810676308253"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFaceBookLogin}
            cssClass={formStyles.facebookLink}
            icon="fa-facebook-official"
            textButton="Log in with Facebook!!"
        />
        <span className={formStyles.forgotLink}>
            <Link to={"/forgot"}>Forgot password?</Link>
        </span>
    </div>
);

LoginForm.propTypes={
    usernameValue:PropTypes.string.isRequired,
    passwordValue:PropTypes.string.isRequired,
    handleInputChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    handleFaceBookLogin:PropTypes.func.isRequired
}
export default LoginForm;