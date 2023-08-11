import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">CineMate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#https://www.instagram.com/kadak_chaii_/" target='_blank' rel = "noreferrer" className="mr-4 hover:underline md:mr-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vishnu-prasad-22450627a" rel = "noreferrer" target='_blank' className="mr-4 hover:underline md:mr-6">Linkdin</a>
          </li>
          <li>
            <a href="https://github.com/vishnu9315" target='_blank' rel = "noreferrer" className="hover:underline">Github</a>
          </li>
        </ul>
      </footer>

    </footer>
  )
}


