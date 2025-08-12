import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="flex flex-col items-center md:flex-row justify-between p-4">
      <h1 className=" btn btn-ghost text-3xl text-center">Stone Maze</h1>
      <nav>
        <ul className="flex flex-col sm:flex-row gap-2">
          <Link className="btn btn-neutral" to="/">
            Home
          </Link>
          <Link className="btn btn-neutral" to="/contact">
            Contact
          </Link>
          <Link className="btn btn-neutral" to="/records">
            Records
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
