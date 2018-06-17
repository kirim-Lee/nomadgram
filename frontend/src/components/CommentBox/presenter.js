import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const CommentBox = (props, context) => (
    <form>
        <textarea placeholder={context.t("Add a comment...")}></textarea>
    </form>
)


CommentBox.contextTypes ={
    t:PropTypes.func.isRequired
}

export default CommentBox; 