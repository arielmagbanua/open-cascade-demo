import logo from "../assets/transparent_cube.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const {
    flaskBottleSelected,
    boxSphereSelected,
    logoSphereSelected
  } = useSelector(state => state.pages);

  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__nav__logo" src={logo} alt="logo"/>
        <ul className="header__nav__menu">
          <li className={flaskBottleSelected ? 'selected' : ''}>
            <Link to="flask-bottle">Flask Bottle</Link>
          </li>
          <li className={boxSphereSelected ? 'selected' : ''}>
            <Link to="box-sphere">Box Sphere</Link>
          </li>
          <li className={logoSphereSelected ? 'selected' : ''}>
            <Link to="logo-sphere">Logo Sphere</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
