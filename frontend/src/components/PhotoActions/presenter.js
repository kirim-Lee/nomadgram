import React from 'react';
import PropTypes from 'prop-types';
import Inoicon from 'react-ionicons';

const PhotoActions =(props,context) =>(
    <div>
        <div>
            <span>
                <Inoicon icon="ios-heart-outline" fontSize="28px" color="black" />
            </span>
            <span>
                <Inoicon icon="ios-text-outline" fontSize="28px" color="black" />
            </span>
        </div>
        <span>{props.number} {props.number===1 ? context.t("like"):context.t("likes")}</span>
    </div>
);

PhotoActions.propTypes = {
    number:PropTypes.number.isRequired
}
PhotoActions.contextTypes = {
    t:PropTypes.func.isRequired
}
export default PhotoActions;