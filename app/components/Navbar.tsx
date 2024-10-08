import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <ul className="navList">
          <li className="navListItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navListItem">
            <Link href="/pages/new">New</Link>
          </li>
          <li className="navListItem">
            <Link href="/pages/contact">Contact</Link>
          </li>
          <li className="navListItem">
            <Link href="/pages/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
