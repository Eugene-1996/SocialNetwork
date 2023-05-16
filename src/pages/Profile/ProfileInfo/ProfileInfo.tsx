import React from 'react';
import Preloader from '../../../components/common/Preloader/Preloader';
import { ProfileDataType } from '../ProfileContainer';
import classes from './ProfileInfo-style.module.css'
import ProfileStatus from '../../../components/ProfileStatus/ProfileStatus';

type ProfileInfoType = {
    profile: ProfileDataType
    status: string
    updateStatus: (status: string) => void

}


const ProfileInfo = (props: ProfileInfoType) => {
    // console.log('profile info props ',props)

    if(props.profile === null){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img id={classes.bigimg} src="https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576.jpg" alt='pic1'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.small} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/* <img id={classes.ava} src="https://simg.nicepng.com/png/small/74-748421_hp-logo-png-charing-cross-tube-station.png" alt='pic2'></img> */}
            </div>
        </div>
    );
};

export default ProfileInfo;