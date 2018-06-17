import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComments = props => (
    <div className={styles.comments}>
        <ul className={styles.list}>
            <Comment username={props.creator.username} comment={props.caption} />
            {props.comments.map(comment=>(
                <Comment key={comment.id} username={comment.creator.username} comment={comment.message} />
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li className={styles.comment}>
        <span>{props.username}</span>
        <span>{props.comment}</span>
    </li>
)

PhotoComments.propTypes={
    creator:PropTypes.shape({
        profile_image:PropTypes.string,
        username:PropTypes.string.isRequired
    }).isRequired,
    caption:PropTypes.string.isRequired,
    comments:PropTypes.arrayOf(
        PropTypes.shape({
            creator:PropTypes.shape({
                profile_image:PropTypes.string,
                username:PropTypes.string.isRequired
            }).isRequired,
            message:PropTypes.string.isRequired
        })
    ),
}

export default PhotoComments;