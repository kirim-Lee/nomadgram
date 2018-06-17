import React from 'react';
import Ionicon from 'react-ionicons';
import styles from './styles.scss';

const Loading = props =>(
    <div className={styles.container}>
        <Ionicon icon="md-heart" fontSize="60px" color="red" beat={true} />
    </div>
)

export default Loading;

