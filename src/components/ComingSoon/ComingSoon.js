import { Link } from 'react-router-dom'
import React from 'react'
import { images } from '../../assets/images';
import styles from './ComingSoon.module.scss'; 
const DefaultConfig={
    title:'Coming Soon',
    description:'we are working on something awesome',
    buttonText:'Go to Home',
    imgSrc:images.coming,
    route:'/', 
} 
function ComingSoon({config=DefaultConfig}) {
    const {title,description,buttonText,imgSrc,route}=config;
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <img src={imgSrc} alt=""  />
            <button className={styles.button}>
                <Link to={route}>{buttonText}</Link>
            </button>
        </div>
    </div>
  )
}

export default ComingSoon