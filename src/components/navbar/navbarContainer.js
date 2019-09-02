
import Navbar from "./navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        sidePage: state.sidePage
    }
};

const NavbarContainer = connect(mapStateToProps)(Navbar);
export default NavbarContainer;