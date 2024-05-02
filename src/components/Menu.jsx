import Link from "next/link";
import "./menu.css";
import { IconClose, IconMenu, IconShopping } from "./icons";
const PAGES = [
  {
    page: "Inicio",
    path: "/",
  },
  {
    page: "Servicios",
    path: "/services",
  },
  {
    page: "Contacto",
    path: "/contacto",
  },
  {
    page: "Nosotros",
    path: "/nosotros",
  },
];

export function Menu() {
  return (
    <header className="header-menu-main">
      <nav className="nav-menu-main">
        <Link href="/" className="nav-menu-logo">Rincon Rizado</Link>

        <label className="menu-main-icon">
          <input id="menu-main-icon-checkbox" type="checkbox" value={"checked"}/>
          <IconMenu className="menu-main-icon-open" size="2rem" />
          <IconClose className="menu-main-icon-close" size="2rem" />
        </label>

        <div className="nav-menu-items">
          {PAGES.map((item) => (
            <Link href={item.path} className="nav-menu-item" key={item.path}>
              {item.page}
            </Link>
          ))}
        </div>

        <div className="nav-menu-controls">
          <IconShopping size="2.25rem" />
        </div>
      </nav>
    </header>
  );
}
