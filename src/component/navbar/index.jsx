
import { Link, Outlet } from "react-router-dom";
import navData from "../../constant";
import "./nav.css";
const NavBar = () => {
  return (
    <>
    <ul className="nav">
      {navData.map((nav) => {
        return (
            <Link to = {nav.path}>
               <li className="item"> {nav.name}</li>
        </Link>
        )
      })}

    </ul>
    <Outlet/>  
   
    {/*  this is used in parent route  and this exactly use where we want to render child sharable data */}
    </>
  );
};

export default NavBar;
// Home
// About Use
// Services
// Contact