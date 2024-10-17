"use client";
import Link from "next/link";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`header-menu-main ${isMenuOpen && "active"}`}>
      <nav className="nav-menu-main">
        <Link href="/" className="nav-menu-logo">
          Rincon Rizado
        </Link>

        <div className="menu-main-icon-control-hamburguer">
          <IconMenu
            className="menu-main-icon open"
            size="3rem"
            onClick={() => setIsMenuOpen(true)}
            style={{
              display: !isMenuOpen ? "block" : "none",
            }}
          />
          <IconClose
            className="menu-main-icon close"
            size="3rem"
            onClick={() => setIsMenuOpen(false)}
            style={{
              display: isMenuOpen ? "block" : "none",
            }}
          />
        </div>

        <div className={`nav-menu-items`}>
          {PAGES.map((item) => (
            <Link
              href={item.path}
              className="nav-menu-item"
              key={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.page}
            </Link>
          ))}
        </div>

        <div className="nav-menu-controls">
          <IconShopping size="3rem" />
        </div>
      </nav>
    </header>
  );
}
