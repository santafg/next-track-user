import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
