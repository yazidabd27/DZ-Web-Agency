"use client"
import Image from "next/image";
import Scroll from "./scroll";
import { useEffect } from "react";

const Features = () => {
    useEffect(()=>{
        Scroll();
    })
    return ( 
        <div className="features">
          <div className="feature">
            <Image src='/assets/seo.png' width={80} height={80} alt="seo"/>
            <h3>Search Engine Optimization</h3>
            <div className="feature-description">We use some SEO techniques to improve your website visibility on the internet.</div>
          </div>
          <div className="feature">
            <Image src='/assets/conception-reactive.png' width={80} height={80} alt="responsive design"/>
            <h3>Responsive Design</h3>
            <div className="feature-description">Our websites are fit all screens sizes to increase accessibility.</div>
          </div>
          <div className="feature">
            <Image src='/assets/infini.png' width={80} height={80} alt="illimited revisions"/>
            <h3>Illimited revisions</h3>
            <div className="feature-description">You have the right to request changes until you are satisfied with the design.</div>
          </div>
        </div>
     );
}
 
export default Features;