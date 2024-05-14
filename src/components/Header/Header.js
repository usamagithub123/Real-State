import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { headerConfig ,NavItems} from '../../constants';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link ,useLocation} from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const RenderTitle=({data})=>{
    const {title,options}=data;
    const[firstTitle,secondTitle]=title.split(' ');
    return(
        <div className={styles.sectionOne}>
            <h1 className={styles.title}> 
            <span>{firstTitle}</span> 
            <span>{secondTitle}</span></h1>
            <div className={styles.options}>
            {options.map((val,index)=><div key={index}><span>{val}</span> <PlayArrowIcon/></div>)}
            </div>
        
        </div>
    )
}
const RenderNavigationLinks=({data,setCurrentNav,currentNav,setIsMenuOpen})=>{
    return(
      <div className={styles.sectionTwo}>
        <nav className={styles.navigation}>
            {data.map(nav=>(
                   <Link
                   className={nav.id===currentNav.id?styles.active:''}
                   to={nav.route}
                   key={nav.id}
                   onClick={()=>{setCurrentNav(nav);setIsMenuOpen(false);}}
                   >
                    {nav.label}
                   </Link>
            ))}
        </nav>
      </div>
    )
}
const Header=({navData=NavItems,headerData=headerConfig})=> {
    const [currentNav, setCurrentNav]=useState({})
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const {pathname}=useLocation()
    useEffect(()=>{
       const nav =navData.find(nav=>nav.route===pathname) 
       setCurrentNav(nav)
    },[pathname,navData])
  
    // const renderNavigationLinks=()=>{
    //     return(
    //         <div>
    //             nav
    //         </div>
    //     )
    // }
    const renderButtons=()=>{
        return(
            <div>
                <div className={styles.sectionThree}>
                    <button>Login In</button>
                    <button className={styles.signUp}>Sign up</button>
                </div>
            </div>
        )
    }
    const renderMobileMenu=()=>{
        return(
            <div className={styles.mobileContainer}>         
                <RenderNavigationLinks data={navData}
            currentNav={currentNav}
            setIsMenuOpen={setIsMenuOpen}
            setCurrentNav={setCurrentNav}/>  
              {renderButtons()}
              <div className={styles.closIcon}
              onClick={()=>setIsMenuOpen(false)}
              >X</div>
            </div>
        )
    }
  return (
    
      <header>
        <div className={styles.container}>
        <div className={styles.header}>
            {/* {renderTitle(headerData)} */}
            <RenderTitle data={headerData}/>
            <RenderNavigationLinks data={navData}
            setIsMenuOpen={setIsMenuOpen}
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}/>
            {/* {renderNavigationLinks()} */}
            {renderButtons()}
            <div className={styles.mobileMenu}
            onClick={()=>setIsMenuOpen(true)}
            >
                            <MenuIcon/>
                            </div>
          
        </div>
        {isMenuOpen ? renderMobileMenu(): ''}
        </div>

    </header>
    
  
  )
}

export default Header 