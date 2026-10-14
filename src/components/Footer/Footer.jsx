import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <img src={facebook_icon} alt="" className="footer__icon__img" />
        <img src={instagram_icon} alt="" className="footer__icon__img" />
        <img src={twitter_icon} alt="" className="footer__icon__img" />
        <img src={youtube_icon} alt="" className="footer__icon__img" />
      </div>
      <ul className="footer__info__links">
        <li className="footer__info__link">Audio Description</li>
        <li className="footer__info__link">Help Centre</li>
        <li className="footer__info__link">Gift Cards</li>
        <li className="footer__info__link">Media Centre</li>
        <li className="footer__info__link">Investor Relations</li>
        <li className="footer__info__link">Jobs</li>
        <li className="footer__info__link">Terms of Use</li>
        <li className="footer__info__link">Privacy</li>
        <li className="footer__info__link">Legal Notices</li>
        <li className="footer__info__link">Cookie Preferences</li>
        <li className="footer__info__link">Corporate Information</li>
        <li className="footer__info__link">Contact Us</li>
      </ul>
      <div className="copyright-text">© 1997-2023 Netflix, Inc.</div>
    </div>
  );
};

export default Footer;
