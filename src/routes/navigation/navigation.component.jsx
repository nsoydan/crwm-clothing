import { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";



const Navigation=()=>{

    const {currentUser}=useContext(UserContext);
    console.log("navigationun içinde currentUser:",currentUser)    
 
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <Logo className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
                <Link className="nav-link" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?( <span className="nav-link" onClick={signOutUser} >
                    SIGN OUT ({currentUser.displayName}) 
                </span> ):( <Link className="nav-link" to='/auth'>
                    SIGN IN 
                </Link>)
                }
               
                
                </div>
            </div>
         
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;