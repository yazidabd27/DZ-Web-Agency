import "@/styles/home.css"
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";

const Home=()=>{
  return (
    <section>
      <div className="hero-section">
        <div className="business-description">
          <h1 className="main-title">Web Design Agency</h1>
          <div className="text-description">
            Elevate your online presence with us, At DZ Web Agency we will bring your digital vision <br />
            to life with creative design and seamless functionality. Ready to stand out online? Let's get started!"
          </div>
          <button>
            <Link href='/contact'>Contact Us</Link>
          </button>
        </div>
      </div>
      <Features/>
      <div className="home-about">
        <Image src="/assets/design-set-up.png" width={400} height={600} alt="design set up" />
        <div className="about-description">
          <h1>What do we do?</h1>
          <p>
            At DZ Web Agency, we specialize in crafting stunning digital solutions tailored to your needs. 
            From captivating portfolio websites that showcase your work to high-converting landing pages that drive results, 
            we offer a range of services designed to elevate your online presence. Using cutting-edge technologies such as 
            HTML, CSS, and Webflow, our experienced team brings your vision to life with precision and creativity. 
            Let us empower your digital journey and unlock new possibilities for your brand.
          </p>
          <h1>Our services</h1>
          <ul>
            <li><i class="fa-solid fa-arrow-right"></i>Portfolio websites</li>
            <li><i class="fa-solid fa-arrow-right"></i>Landing pages</li>
            <li><i class="fa-solid fa-arrow-right"></i>Business website</li>
            <li><i class="fa-solid fa-arrow-right"></i>E-commerce stores</li>
          </ul>
        </div>
      </div>
      <div className="process">
        <h1>How To Get Your Website</h1>
        <p>
          Welcome to DZ Web Agency's step-by-step guide to success. <br />
          We're here to guide you through our proven process for achieving your digital goals.
        </p>
        <div className="steps">
          <div className="step" data-number="01">
            <h3>Connect With US</h3>
            <div>
              Reach out to us to start the conversation. We'll listen to your needs, answer your questions, 
              and discuss how we can help you achieve your digital goals.
            </div>
          </div>
          <div className="step" data-number="02">
            <h3>Make A Schedule</h3>
            <div>
              Let's set up a convenient time to chat further. We'll schedule a meeting or call to dive deeper into your project requirements and timeline.
            </div>
          </div>
          <div className="step" data-number="03">
            <h3>Describe What You Want</h3>
            <div>
              Share your vision with us. Whether you have specific ideas in mind or need guidance, 
              we're here to listen and turn your concepts into reality.
            </div>
          </div>
          <div className="step" data-number="04">
            <h3>Get Your Website Done</h3>
            <div>
              Sit back and relax as we bring your website to life. 
              From design to development, we'll handle every aspect with precision and expertise, ensuring your satisfaction every step of the way.
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1677A4" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,208C840,192,960,160,1080,133.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
      </div>
      <div className="technologies">
        <Image src="/assets/html.png" width={100} height={100} alt="html"/>
        <Image src="/assets/css.png" width={100} height={100} alt="css"/>
        <Image src="/assets/js.png" width={100} height={100} alt="js"/>
        <Image src="/assets/webflow.png" width={100} height={100} alt="webflow"/>
        <Image src="/assets/wordpress.png" width={100} height={100} alt="wordpress"/>
        <Image src="/assets/woocommerce.png" width={100} height={100} alt="woocommerce"/>
        <Image src="/assets/shopify.png" width={100} height={100} alt="shopify"/>
      </div>
      <div className="contact-info">
        <Link className="mobile" href="tel:+213795247309">
          <i className="fa-solid fa-phone"></i>
          <span>+213795247309</span>
        </Link>
        <Link className="email" href="mailto:aitboudaoudyazid27@gmail.com">
          <i className="fa-solid fa-envelope"></i>
          <span>aitboudaoudyazid27@gmail.com</span>
        </Link>
      </div>
    </section>
  );
}

export default Home;

