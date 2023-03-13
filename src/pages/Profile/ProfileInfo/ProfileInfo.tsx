import React from 'react';
import classes from './ProfileInfo-style.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img id={classes.bigimg} src="https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576.jpg" alt='pic1'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img id={classes.ava} src="https://simg.nicepng.com/png/small/74-748421_hp-logo-png-charing-cross-tube-station.png" alt='pic2'></img>
            </div>
        </div>
    );
};

export default ProfileInfo;