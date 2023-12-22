import { Link, NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-300 bg-gray-800" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-300 bg-gray-800" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourTeam"
          className={({ isActive }) =>
            isActive ? "text-blue-300 bg-gray-800" : ""
          }
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-300 bg-gray-800" : ""
          }
        >
          About US
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed shadow-md w-full z-10 text-blue-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill=""
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-3xl font-bold hidden lg:block">
          Task Management.
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <span className="pr-4">
              <img
                className="rounded-full w-11 h-11"
                src={user.photoURL}
                alt=""
              />
            </span>
            <span className="pr-4 hidden lg:block">{user.displayName}</span>
            <button
              onClick={handleSignOut}
              className="btn btn-outline text-blue-300"
            >
              <FaUserCheck></FaUserCheck>Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline text-blue-300">
              <FaUserCheck></FaUserCheck>Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
