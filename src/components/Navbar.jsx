import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="flex flex-col items-center md:flex-row justify-between p-8">
      <Link className="btn btn-neutral" to="/">
        <h1 className=" btn btn-ghost text-3xl text-center p-2">Stone Maze</h1>{" "}
      </Link>
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
