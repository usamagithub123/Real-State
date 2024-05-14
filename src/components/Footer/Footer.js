import React, { useRef } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import styles from './Footer.module.scss'

const AboutData = {
  heading: ["Ba", "Thool"],
  content: ["Copyrigths Mcasa Home and properties.", "All rigths reserved"],
  socialIcons: [
    <InstagramIcon />,
    <XIcon />,
    <YouTubeIcon />,
    <LinkedInIcon />,
  ],
};
const companyMenu = {
  label: "Company",
  menus: [
    { label: "About us", route: "/" },
    { label: "Blog", route: "/" },
    { label: "Contact us", route: "/contactus" },
    { label: "Pricing ", route: "/" },
    { label: "Testimonials", route: "/" },
  ],
};
const supportMenu = {
  label: "support",
  menus: [
    { label: "Help Center", route: "/" },
    { label: "Terms of service", route: "/" },
    { label: "Legal", route: "/contactus" },
    { label: "Privacy policy ", route: "/" },
    { label: "Status", route: "/" },
  ],
};
function Footer() {
    const email=useRef()
  const renderAboutPage = (data) => {
    const { heading, content, socialIcons } = data;
    return (
      <div className={styles.aboutPage}>
        <div className={styles.heading}>
          {heading.map((data, index) => (
            <span key={index}>{data}</span>
          ))}
        </div>
        <div className={styles.content}>
          {content.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </div>
        <div className={styles.socialMedia}>
          {socialIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderMenu = (data) => {
    const { label, menus } = data;
    return ( <div className={styles.menu}>
        <div className={styles.subHeading}>
            {label}
        </div>
        <div className={styles.menuItems}>
            {menus.map((menu,index)=>(
                <Link
                key={index}
                to={menu.route}>
                    {menu.label}
                </Link>
            ))}
        </div>
    </div>)
  };

  const handleNewsLetter=(event)=>{
    event.preventDefault();
    const { current }=email
    email.current.value=''
  }
  const renderNewsLetter=()=>{
    return(
        <div className={styles.newsLetter}>
            <div className={styles.label}>Stay up to date</div>
            <form onSubmit={handleNewsLetter}>
            <div className={styles.emailContainer}>
                <input ref={email} type="text" placeholder="your email address" />
                <button type='submit' className={styles.SendIcon}><SendIcon/></button>
                </div>
            </form>
          
           
        </div>
    )
  }
  return(
    <footer>
   <div className={styles.container}>{renderAboutPage(AboutData)}
  {renderMenu(companyMenu)}
  {renderMenu(supportMenu)}
  {renderNewsLetter()}
  </div>;
    </footer>
  ) 
}

export default Footer;
