import Link from "next/link";
import "@/styles/footer.css"

const Footer = () => {
    return ( 
        <footer>
            <div className="top-footer">
                <div className="logo">
                    <Link href="/">DZ Web Agency</Link>
                </div>
                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/portfolio'> Portfolio</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="bottom-footer">
                <nav>
                    <ul className="social-media">
                        <li><Link href='/'><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link href='/'><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link href='/'><i className="fa-brands fa-linkedin"></i></Link></li>
                    </ul>
                </nav>
                <div className="copy-right">
                    <span>&copy;</span>
                    Copyright 2024 - DZ Web Agency
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;