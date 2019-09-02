import React from 'react';
import s from './navbar.module.css';
import Navitm from "./navitm/navitm";
import Friends from "./friends/friends";

const Navbar = (props) => {
    let state = props.sidePage;
    let navitems = state.sidebar.map(el => <Navitm path={el.path} name={el.name} key={el.id}/>);
    let friends = state.dialogData.slice(0, 3).map(friend =>
        <Friends path={friend.path} name={friend.name} key={friend.id}/>);
    return (
        <div>
            <nav className={s.nav}>
                {navitems}
                <h2>Friends</h2>
                <div className={s.friendrow}>
                    {friends}
                </div>
            </nav>
        </div>
    )
};
export default Navbar;