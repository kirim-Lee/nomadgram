import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Loading from 'components/Loading';
import Ionicon from 'react-ionicons';
import UserRow from 'components/UserRow';

const UserList = props => (
    <div className={styles.container}>
        <div className={styles.box}>
            <header className={styles.header}>
                <h4 className={styles.title}>{props.title}</h4>
                <Ionicon onClick={props.closeLikes} icon="md-close" fontSize="20px" color="black" />
            </header>
            <div className={styles.content}>{props.loading? <Loading/> : <RenderUserRow {...props}/>}</div>
        </div>
    </div>
);

const RenderUserRow = props => {
    const {userList} = props;
    return userList.map(user=>
        <UserRow user={user} key={user.id}/>
    )
    
}

UserList.propTypes={
    title:PropTypes.string.isRequired,
    loading:PropTypes.bool.isRequired,
    userList:PropTypes.array,
    closeLikes:PropTypes.func.isRequired
}

export default UserList;