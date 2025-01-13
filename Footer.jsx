import React from "react";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="p-8 bg-yellow-200">
        <div className="mainfooter">
          <div className="footer-top py-4 px-16 bg-slate-500 md:flex gap-5 justify-between">
            <div className="top-left flex gap-10">
              <h1>Logo</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="top-right flex items-center gap-12 ">
              <p>Book Your Doctor Now</p>
              <button className="bg-blue-800 py-2 px-5">Click Me</button>
            </div>
          </div>

          {/* footerBottom */}
          <div className="footerBottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-6 bg-yellow-900 text-white p-8">
            {/* Column 1 */}
            <div className="company px-6 md:border-r-2  ">
              <h1 className="my-2">Company</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                voluptas impedit eligendi dolorem nesciunt nisi pariatur? Nihil
                asperiores possimus non id corporis, vel vero temporibus nobis,
                iusto illum dicta nemo?
              </p>
            </div>

            {/* Column 2 */}
            <div className="services px-6 lg:border-r-2 ">
              <h1 className="my-2">Services</h1>
              <ul>
                <li>Service1</li>
                <li>Service2</li>
                <li>Service3</li>
                <li>Service4</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="usefulLink  px-6 md:border-r-2 ">
              <h1 className="my-2">Useful Links</h1>
              <ul>
                <li>Service1</li>
                <li>Service2</li>
                <li>Service3</li>
                <li>Service4</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="contact px-6">
              <h1 className="my-2">Contact</h1>
              <div className="flex items-center gap-4">
                <span>
                  <FaHome />
                </span>
                <p>Bangali colony burari dehlhi this is delhi meri jaan</p>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  <FaHome />
                </span>
                <p>7011719443</p>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  <FaHome />
                </span>
                <p>Vikas@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  <FaHome />
                </span>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
