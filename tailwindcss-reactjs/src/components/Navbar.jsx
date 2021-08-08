import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="relative flex items-center justify-between h-16 font-mono shadow-sm"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Tofu
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <div className="hidden pr-8 md:block">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/" className="p-4">
          Menu
        </Link>
        <Link to="/" className="p-4">
          About
        </Link>
        <Link to="/" className="p-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
