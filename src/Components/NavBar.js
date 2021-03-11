import SidebarData from './SidebarData'
import logo from '../images/logo.png'

function NavBar() {
    return (
        <>
            <nav className=" text-white h-screen  pt-5 sidebar">
                <ul className="nav-menu-items flex justify-between  items-center px-4 py-6">
                    <li>
                        <div className=" flex md:ml-10 ml-1">
                        <img src={logo} alt="pics" className="w-8 h-8" />
                        </div>
                    </li>

                    <li className="navbar-toggle">
                        <div className="menu-bars">
                        <div className="hover:text-yellow-300 text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        </div>
                    </li>
                </ul>
                <SidebarData/>
            </nav>
        </>
    )
}

export default NavBar