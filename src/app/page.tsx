"use client"; // This is a client component
import Image from "next/image";
import './responsive.css'

import img1_1 from "../images/1_1.png"
import img1_2 from "../images/1_2.png"
import img2_1 from "../images/2_1.png"
import img2_2 from "../images/2_2.png"
import img5_1 from "../images/5_1.png"
import logo1 from "../images/newslogo.png"

import { useRef, useEffect } from 'react';


export default function Home() {
  // const contentRef = useRef<HTMLDivElement>(null); // Create a ref for the scrollable content
  // let scrollableHeight
  // useEffect(() => {
  //   if (contentRef.current) {
  //     scrollableHeight = contentRef.current.scrollHeight;
  //     console.log(scrollableHeight); // Output the scrollable height
  //   }
  // }, []);


  return (
    <main className="">
      <section className="section1 flex min-h-screen flex-col items-center justify-center p-24">
        <header className="">
          <nav>
            <ul className="flex justify-center">
              <li className="inline p-5"><a href="#about_section">ABOUT</a></li>
              <li className="inline p-5"><a href="#work_section">WORK</a></li>
              <li className="inline p-5"><a href="#partners_section">PARTNERS</a></li>
              <li className="inline p-5"><a href="#contactUs_section">CONTACT US</a></li>
            </ul>
          </nav>
          <div className ="parent">
          <Image className="pb-10"
            src={img1_1}
            alt="Landscape picture"
            width={300}
            height={500}
          />
          <div className="pencil_img_container flex items-stretch">
            <h1>?</h1>
            <div className="pencil_img">
              <Image
                className="img1_2"
                src={img1_2}
                alt="Landscape picture"
                width={650}
                height={500}
              />
            </div>
             <h1>!</h1>
          </div>
          <h1 className="pt-3 header_quotation">THROW QUESTIONS</h1>
          <h1 className="header_quotation">CATCH EXCLAMATIONS</h1>
          </div>
        </header>
      </section>
      
      <section className="section2 flex min-h-screen flex-col items-center justify-between" id="about_section">
        <div className="header">
          <p>ABOUT US</p>
        </div>
        <div className="about_us_container flex justify-center">
        <Image className="image2_1"
            src={img2_1}
            alt="Landscape picture"
          />
          <div className="bio block">
            <h1>DESIGN & WEB DEVELOPMENT</h1>
            <p>Our company has a team called 'Design People Toronto'</p>
            <p>The team works on design for publication, and website</p>
            <p>development with marketing focus on Korean communities,</p>
            <p>companies. The team consists of professional desingers and</p>
            <p>developers with more than 10 years of experience in the industry.</p>
          </div>
          
        </div>
        <Image
            className="img2_2"
            src={img2_2}
            alt="Landscape picture"
          />
      </section>
      <section className="section3 flex min-h-screen flex-col items-center justify-center p-24"  id="work_section">
      <div className="header">
          <p>WORK</p>
      </div>
      <div className="grid_container">
        <div className="grid_item"><div className="grid_content">1</div></div>
        <div className="grid_item"><div className="grid_content">2</div></div>
        <div className="grid_item"><div className="grid_content">3</div></div>  
        <div className="grid_item"><div className="grid_content">4</div></div>
        <div className="grid_item"><div className="grid_content">5</div></div>
        <div className="grid_item"><div className="grid_content">6</div></div>  
        <div className="grid_item"><div className="grid_content">7</div></div>
        <div className="grid_item"><div className="grid_content">8</div></div>
        <div className="grid_item"><div className="grid_content">9</div></div>
        <div className="grid_item"><div className="grid_content">10</div></div>  
        <div className="grid_item"><div className="grid_content">11</div></div>  
        <div className="grid_item"><div className="grid_content">12</div></div>  
      </div>

      {/* popup */}
      <div className="popup">
        <div className="bg" >
          <div className="poup_container">
          <div className="circle_bg top_circle"></div>
            <div className="popup_header">
              <Image
              src={img1_1}
              alt="logo"
              width={90}
              />
              <a href="">x</a>
            </div>
            <div className="popup_inner">
              <h1>Logo & Symbol</h1>
              <div className="popup_img">

              </div>
              <div className="popup_bot">
                <ul>
                  <li>Brand Naming</li>
                  <li>Logos, symbols, embllem design</li>
                  <li>Various options up to customer needs</li>
                </ul>
                <ul>
                  <li>Basic</li>
                  <li>Business</li>
                  <li>Special</li>
                </ul>
                <ul>
                  <li>Basic</li>
                  <li>Business</li>
                  <li>Special</li>
                </ul>
                <button>Order Now</button>
              </div>
            </div>
            <div className="circle_bg bottom_circle"></div>
          </div>
        </div>
      </div>

      </section>
      <section className="section4 flex min-h-screen flex-col items-center justify-center p-24" id="partners_section">
      <div className="header">
          <p className="header_partner">PARTNERS</p>
      </div>
      <div className="grid2_container">
        <div className="grid2_item">
          <div className="grid2_content">
            <a href="https://cknnews.net/" target="_blank">
              <Image
              src={logo1}
              alt="news logo"
              />
              <p>CKNNEWS</p>
            </a>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
        <div className="grid2_item">
          <div className="grid2_content">
            <Image
            src={logo1}
            alt="news logo"
            />
            <p>CKNNEWS</p>
          </div>
        </div>
      </div>
      </section>
      <section className="section5 flex min-h-screen flex-col items-center justify-center" id="contactUs_section">
      <div className="header">
          <p>CONTACT US</p>
      </div>
        <div className="contactUs_container text-center d-flex">
          <div className="flex justify-center">
            <Image className="pb-4"
            src={img5_1}
            alt="Design People Toronto"
            width={230}
            />
          </div>
          <h1>+1 437 552 2253</h1>
          <h3 className="pb-10">dptoronto@gmail.com</h3>
          <p>Monday - Friday : 9am - 5:30pm</p>
          <p className="pb-10">Closed Satuarday, Sunday</p>
          <p>H-4515 Chesswood Dr,</p>
          <p className="pb-10">Toronto, ON M3J 2V6</p>
          <button className="contactBtn">CONTACT</button>
        </div>
      </section>
    </main>
  );
}
