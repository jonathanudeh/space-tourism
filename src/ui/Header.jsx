import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { id: "00", name: "Home", to: "/" },
    { id: "01", name: "Destination", to: "/destination" },
    { id: "02", name: "Crew", to: "/crew" },
    { id: "03", name: "Technology", to: "/technology" },
  ];

  useEffect(
    function () {
      // prevents any of the code below from even running if nav is closed
      if (!navOpen) return;

      document.body.style.overflow = "hidden";

      return () => (document.body.style.overflow = "auto");
    },
    [navOpen],
  );

  return (
    <nav className="bg-tranparent absolute w-full text-blue-100 transition-all duration-1000">
      <div className="flex items-center justify-between pt-5 pr-5 pl-5 sm:gap-2 md:pr-0">
        <Link to="/" className="">
          <img src="/assets/shared/logo.svg" alt="Logo" className="h-10 w-10" />
        </Link>

        {/* desktop navigation */}
        <ul className="hidden h-25 items-center justify-center gap-10 bg-transparent backdrop-blur-3xl sm:flex md:px-15">
          {links.map((link) => (
            <li key={link.to} className="h-full">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex h-full items-center justify-center border-b-2 tracking-wider text-blue-100 uppercase transition-all duration-300 hover:border-b-blue-100 ${
                    isActive ? " border-blue-100 " : "border-b-transparent "
                  }`
                }
              >
                <span className="mr-1 font-bold">{link.id}</span>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile hamburger */}
        {!navOpen && (
          <button className="sm:hidden" onClick={() => setNavOpen(true)}>
            <img src="/assets/shared/icon-hamburger.svg" alt="Hamburger icon" />
          </button>
        )}
      </div>

      {/* mobile nav */}
      <MobileNav links={links} navOpen={navOpen} onNavOpen={setNavOpen} />
    </nav>
  );
}

export default Header;
