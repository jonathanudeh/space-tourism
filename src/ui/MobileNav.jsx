import { NavLink } from "react-router-dom";

function MobileNav({ links, navOpen, onNavOpen }) {
  return (
    <div
      className={`fixed top-0 right-0 flex h-dvh w-50 flex-col gap-15 bg-transparent pt-5 pl-5 backdrop-blur-lg transition-all duration-500 md:hidden ${navOpen ? "translate-x-0 " : "translate-x-full"}`}
    >
      {/* close icon */}
      <button className="self-end p-4" onClick={() => onNavOpen(false)}>
        <img src="/assets/shared/icon-close.svg" alt="Close hamburger sign" />
      </button>

      {/* navs */}
      <ul className="w-full gap-5 space-y-8">
        {links.map((link) => (
          <li key={link.to} className="w-full text-start">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center justify-start border-r-2 tracking-wider text-blue-100 uppercase transition-all duration-300 hover:border-r-blue-100 ${
                  isActive
                    ? " cursor-pointer border-blue-100"
                    : "border-r-transparent "
                }`
              }
            >
              <span className="mr-1 font-bold">{link.id}</span>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
