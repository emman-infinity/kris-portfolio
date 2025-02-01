import { Link } from "react-router-dom"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/#about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#projects"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

