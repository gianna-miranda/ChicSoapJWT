import React from "react";
import './_Footer.css'
function Footer() {
  return (
    <footer
      className="section footer-classic context-white bg-image"
      style={{ background: "green" }}
    >
      <div className="container">
        <div className="row row-30">
          <div className="col-md-4 col-xl-5">
            <div className="pr-xl-4">

              <p>
                Organic Handmade Soaps
              </p>

              <p className="rights">
                <span>© </span>
                <span className="copyright-year">2019</span>
                <span> </span>
                <span> </span>
                <span> </span>
                <span>All Rights Reserved.</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contacts</h5>
            <dl className="contact-list">
              <dt>Located:</dt>
              <dd>Guayaquil, Ecuador</dd>
            </dl>
            <dl className="contact-list">
              <dt>email:</dt>
              <dd>
                <a href="mailto:#">gigismail@gmail.com</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="row no-gutters social-container">
        <div className="col">
          <a className="social-inner" href="https://www.facebook.com">
            <span className="icon mdi mdi-facebook" />
            <span>Facebook</span>
          </a>
        </div>
        <div className="col">
          <a className="social-inner" href="https://www.instagram.com/chicecobelle/">
            <span className="icon mdi mdi-instagram" />
            <span>instagram</span>
          </a>
        </div>
        <div className="col">
          <a className="social-inner" href="https://twitter.com">
            <span className="icon mdi mdi-twitter" />
            <span>twitter</span>
          </a>
        </div>
       
      </div>
    </footer>
  );
}
export default Footer;





























// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// // import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
// // import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// // import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// library.add(fab);

// const Footer = () => {
//    return (

//    <>
//        <footer className="footer">
//            <h2 className="footer__heading">Remixer</h2>
//            <div className="footer__socials">
               
//                <a className="footer__socials__icon" rel="noopener noreferrer" target="_blank" href="https://github.com/gianna-miranda"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'github-square']} /><span className="footer__socials__label">Github</span></a>
//            </div>

//            <nav className="footer__nav">
//                <div className="footer__info">
//                    {/* <a className="footer__info__icon" href="/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="footer__info__label">(704) 313 5600</span></a>
//                    <a className="footer__info__icon footer__info__icon--divider"rel=" noopener noreferrer" target="_blank" href="https://www.google.com/gmail/"><FontAwesomeIcon className="footer__info__icon--size" icon={faEnvelope} /><span className="footer__info__label">gigismail.gmail</span></a> */}
//                    {/* <a className="footer__info__icon" rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="footer__info__label">Ecuador</span></a> */}
//                </div>
//            </nav>

//            <div className="copyright">
//                <p className="copyright__text">Copyright &copy; 2019 Remixer.io</p>
//                <p className="copyright__updated">Lastest Changes October 3, 2019</p>
//            </div>
//        </footer>
//    </>

//    )
// }
// export default Footer;