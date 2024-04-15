import Link from "next/link";
import "@/styles/navbar.css"

const Navbar = () => {
    return ( 
        <header>
            <div className="logo">
                <Link href='/'>DZWebAgency</Link>
            </div>
            <nav>
                <ul>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/portfolio'> Portfolio</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;