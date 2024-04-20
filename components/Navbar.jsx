import Link from "next/link";
import "@/styles/navbar.css";
import Togller from "./togller";

const Navbar = () => {
    return ( 
        <header>
            <div className="logo">
                <Link href='/'>DZ Web Agency</Link>
            </div>
            <nav className="nav-bar">
                <ul className="pages">
                    <li><Link href='/' className="active">Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/portfolio'> Portfolio</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <div className="phone-number">
                    <i className="fa-solid fa-phone"></i>
                    <span>+213795247309</span>
                </div>
                <ul className="social-media">
                    <li><Link href='/'><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link href='/'><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link href='/'><i className="fa-brands fa-linkedin"></i></Link></li>
                </ul>
                <div className="language">
                    <Link href="/">
                        <i class="fa-solid fa-globe"></i>
                        <span>FR</span>
                    </Link>
                </div>
            </nav>
            <Togller/>
        </header>
     );
}
 
export default Navbar;