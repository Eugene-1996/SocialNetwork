import React from 'react';
import classes from './post-style.module.css'


type PostTypes = {
    message : string
    like: string
}

const Post = (props : PostTypes) => {
    return (
        <div className={classes.item}>
            <img src="https://media.glamour.com/photos/5fa0610c53352ad65a54976c/master/w_2560%2Cc_limit/Ava%2520Max%25202.jpg" alt='ava'></img>
            {props.message}
            <div>
                <span>{props.like} Likes</span> 
            </div>
        </div>
    );
};

export default Post;