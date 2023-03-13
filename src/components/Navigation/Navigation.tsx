import React from 'react';
import classes from './navigation-style.module.css'
import { NavLink } from 'react-router-dom';
import Friends from '../../pages/Friends/Friends';
import FriendsImage from '../FriendsImage/FriendsImage';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>
      <div className={classes.friends}> 
        <NavLink to='/friends' activeClassName={classes.active}>Friends<FriendsImage/></NavLink>
      </div>
    </nav>
  );
};

export default Navigation;