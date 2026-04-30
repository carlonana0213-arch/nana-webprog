import { NavLink } from "react-router-dom";
import logo from "../assets/icons/sodium-icon-primary.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
  { label: "Login", to: "/auth/signin" },
  { label: "Sign Up", to: "/auth/signup" },
  { label: "Dashboard", to: "/dashboard" },
];

const navLinkClassName = ({ isActive }) =>
  [
    " border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-blue-950 bg-blue-950 text-zinc-50"
      : "border-transparent text-zinc-500 hover:border-blue-950 hover:bg-zinc-50 hover:text-blue-950",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-left gap-3 -ml-50">
          <div className="space-y-0.5">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
