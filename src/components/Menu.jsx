import Link from "next/link";
import "./menu.css";
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
];

export function Menu() {
  return (
    <header className="header-menu-main">
      <nav className="nav-menu-main">
        <Link href="/" className="nav-menu-logo">Rincon Rizado</Link>

        <div className="nav-menu-items">
          {PAGES.map((item) => (
            <Link href={item.path} className="nav-menu-item" key={item.path}>
              {item.page}
            </Link>
          ))}
        </div>

        <div className="nav-menu-controls">
          <span>Carrito</span>
        </div>
      </nav>
    </header>
  );
}
