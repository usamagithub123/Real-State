import React from 'react'
import styles from './ContactUs.module.scss'
import FormHelper from '../../components/FormHelper'

const contactInfo=[
    {label:"Email", value:'contact@example.com'},
    {label:"Phone", value:'+1 234 654433 350'},
    {label:"Address", value:'32 tempel avenue ,koneshwar, india '},

]

 const ContactUs = () => {
    const renderInfo=(data ,index)=>{
        const{label ,value}=data
        return(
            <div key={index} className={styles.infoItem}>
                <span className={styles.label}>{label} : </span>
                <span className={styles.value}>{value}</span>
            </div>
        )

    }


  return (
      <div className={styles.container}>
        <div className={styles.details}>
            <h2 className={styles.heading}>Contact Us</h2>
       
        </div>
            
        <div className={styles.info}>
         <div className={styles.subHeading}>Reach out us here:</div>   
        {contactInfo.map(renderInfo)}
        </div>
      </div>
  )
}

export default ContactUs