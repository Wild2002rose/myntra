import React from 'react';

function Footer() {
  return (
    <>
      <div>
        <footer >
          <div className="footer-container flex flex-col bg-gray-100 px-56">
            <div className="row flex mb-5">
              <div className="online-shopping text-left mr-12.5">
                <span className="content-heading text-black font-semibold tracking-normal">ONLINE SHOPPING</span>
                <div className="content-box leading-7">
                  <br />
                  Men
                  <br />
                  Women
                  <br />
                  Kids
                  <br />
                  Home & Living
                  <br />
                  Beauty
                  <br />
                  Gift Cards
                  <br />
                  Myntra Insider
                </div>
                <br />
                <span className="content-heading text-black font-semibold tracking-normal">USEFUL LINKS</span>
                <div className="content-box my-6 mb-10">
                  <br />
                  Blog
                  <br />
                  Careers
                  <br />
                  Site Map
                  <br />
                  Corporate Information
                  <br />
                  Whitehat
                </div>
              </div>
              <div className="customer-policies original text-black opacity-80 mb-7.5">
                <span className="content-heading text-black font-semibold tracking-normal">CUSTOMER POLICIES</span>
                <div className="content-box leading-7">
                  <br />
                  Contact Us
                  <br />
                  FAQ
                  <br />
                  T&C
                  <br />
                  Terms Of Use
                  <br />
                  Track Orders
                  <br />
                  Shipping
                  <br />
                  Cancellation
                  <br />
                  Returns
                  <br />
                  Privacy policy
                  <br />
                  Grievance Officer
                </div>
              </div>
              <div className="app">
                <span className="content-heading">EXPERIENCE MYNTRA APP ON MOBILE</span>
                <div className="download-button">
                  <div className="Google-play">
                    <img
                      src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/google-play.png"
                      alt="google play"
                    />
                  </div>
                  <div className="App-Store">
                    <img
                      src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/app-store.png"
                      alt="app store"
                    />
                  </div>
                </div>
                <br />
                <div className="links-container">
                  <span className="content-heading">KEEP IN TOUCH</span>
                  <div className="social-links">
                    <span className="fb-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </span>
                    <span className="tw-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </span>
                    <span className="yt-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </span>
                    <span className="ig-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.913 3.913 0 0 0 .42 2.76c-.198.509-.332 1.09-.372 1.943C.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.04.853.174 1.434.372 1.943.199.509.462.955.923 1.417.462.461.908.724 1.417.923.509.198 1.09.332 1.943.372.853.04 1.126.048 3.297.048s2.444-.01 3.297-.048c.853-.04 1.434-.174 1.943-.372a3.911 3.911 0 0 0 1.417-.923 3.911 3.911 0 0 0 .923-1.417c.198-.509.332-1.09.372-1.943.04-.853.048-1.126.048-3.297s-.01-2.444-.048-3.297c-.04-.853-.174-1.434-.372-1.943a3.914 3.914 0 0 0-.923-1.417A3.914 3.914 0 0 0 13.24.42c-.509-.198-1.09-.332-1.943-.372C10.444.01 10.171 0 8 0zm0 1.459c2.137 0 2.387.01 3.233.047.78.036 1.204.166 1.485.276.373.145.64.318.921.598.28.28.453.548.598.921.11.281.24.705.276 1.485.037.846.047 1.096.047 3.233s-.01 2.387-.047 3.233c-.036.78-.166 1.204-.276 1.485a2.45 2.45 0 0 1-.598.921 2.45 2.45 0 0 1-.921.598c-.281.11-.705.24-1.485.276-.846.037-1.096.047-3.233.047s-2.387-.01-3.233-.047c-.78-.036-1.204-.166-1.485-.276a2.452 2.452 0 0 1-.921-.598 2.451 2.451 0 0 1-.598-.921c-.11-.281-.24-.705-.276-1.485-.037-.846-.047-1.096-.047-3.233s.01-2.387.047-3.233c.036-.78.166-1.204.276-1.485a2.45 2.45 0 0 1 .598-.921 2.45 2.45 0 0 1 .921-.598c.281-.11.705-.24 1.485-.276.846-.037 1.096-.047 3.233-.047zM8 3.891a4.109 4.109 0 1 0 0 8.218 4.109 4.109 0 0 0 0-8.218zm0 1.459a2.65 2.65 0 1 1 0 5.3 2.65 2.65 0 0 1 0-5.3zm5.223-.934a.96.96 0 1 1-1.922 0 .96.96 0 0 1 1.922 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-us">
                <span className="content-heading">ABOUT US</span>
                <div className="content-box">
                  <br />
                  <span className="content-sub-heading">A Wide Range of Products</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores
                  dolorem provident exercitationem cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni
                  explicabo soluta pariatur blanditiis mollitia.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores
                  dolorem provident exercitationem cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni
                  explicabo soluta pariatur blanditiis mollitia.
                  <br />
                  <span className="content-sub-heading">A Wide Range of Products</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores
                  dolorem provident exercitationem cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni
                  explicabo soluta pariatur blanditiis mollitia.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores
                  dolorem provident exercitationem cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni
                  explicabo soluta pariatur blanditiis mollitia.
                  <br />
                </div>
              </div>
              <div className="original">
                <span className="content-heading">100% ORIGINAL</span>
                <div className="content-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores dolorem provident exercitationem
                  cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni explicabo soluta pariatur
                  blanditiis mollitia.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia ratione, adipisci dolores
                  dolorem provident exercitationem cumque! Voluptates labore suscipit unde eligendi vel reiciendis, magni
                  explicabo soluta pariatur blanditiis mollitia.
                </div>
              </div>
            </div>
            <div className="footer-text flex justify-between mb-7.5">
              <p>
                In case of any concern,{' '}
                <a
                  className="footer-link cursor-pointer text-gray-600 font-medium" href="mailto:grievance.officer@myntra.com"
                >
                  Contact Us
                </a>
              </p>
              <p>&copy; 2023 Myntra. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
