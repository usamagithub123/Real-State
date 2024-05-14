import React from 'react';
import styles from './Home.module.scss';
import process1 from '../../assets/images/process1.png'
import process2 from '../../assets/images/process2.png'
import process3 from '../../assets/images/process3.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormHelper from '../../components/FormHelper';


const Home=()=> { 
    const homeFormConfig=[
      {
        label:'Location',
        name:'location',
        type:'select',
        options:[
          {label:'Laos,Nigeria',value:'laos-nigeria'},
          {label:'New York City ,USA',value:'new-york-city-usa'},
          {label:'Paris,France',value:'paris-france'},
          {label:'TOkyo,Japan',value:'tokyo-japan'},
          {label:'Sydeny,Australia',value:'sydeny-australia'},
        ],
        required:true,
      },
      {
        label:'Category',
        name:'category',
        type:'select',
        options:[
          {label:'3 Bedroom Duplex',value:'3-bedroom-duplex'},
          {label:'Luxury Suite',value:'luxury-suite'},
          {label:'Beachfront Villa',value:'beachfront-villa'},
          {label:'Mountain Cabin',value:'mountain-cabin'},
          {label:'Sydeny,Australia',value:'sydeny-australia'},
        ],
        required:true,
      },
      {
        label:'Budget',
        name:'budget',
        type:'select',
        options:[
          {label:'2999-9999',value:'2999-9999'},
          {label:'5999-9999',value:'5999-9999'},
          {label:'8999-19999',value:'8999-19999'},
          {label:'12999-39999',value:'12999-39999'},
          {label:'22999+',value:'22999+'},
        ],
        required:true,
      },
    ]
    const processConfig=[
      {imgSrc:process1,subHeading:'Find A Listing',content:'Make a choice of the type of apartment and qualities that appeal to your interest.'},
      {imgSrc:process2,subHeading:'Talk to an Agent',content:'Our Agents are availabel 24 Hours Mon-Sat.'},
      {imgSrc:process3,subHeading:'Set the date and Move in!',content:'Make payments ,get reciept and all other important documents,set your move-in date'},
    ]
   const renderProcess=(data,index)=>{
    const {imgSrc,subHeading,content}=data
    return(
      <div className={styles.processContainer} key={index}>
        <div className={styles.process}>
          <img src={imgSrc} alt={subHeading} />
          <div className={styles.subSection}>
            <div className={styles.subHeading}>{subHeading}</div>
          <div className={styles.content}>{content}</div>
        </div>
        </div>
        {processConfig.length!==index+1 ? <ArrowForwardIcon/> :''}
      </div>
    )
   } 
   const formSubmit=(formData)=>{

   }
  
  return (
    <div className={styles.container}>
      <div className={styles.sectionOne}>
        <div className={styles.title}>Buy, Sell, Rent.</div>
        <div className={styles.heading}>The best deals, for both Realtors and Customers.</div>
        <div className={styles.subHeading}><span>Explore More</span><ArrowForwardIcon/></div>
      </div>
      <div className={styles.sectionThree}>
      <div className={styles.banner}>
        <div className={styles.heading}>What Do you need?</div>      
        <FormHelper onSubmit={formSubmit} config={homeFormConfig}/>
      </div>
    </div>
      <div className={styles.sectionTwo}>
        <div className={styles.heading}>How It Works</div>
        <div className={styles.steps}>
        {processConfig.map(renderProcess)}
        </div>
       

      </div>
   
    </div>
  )
}

export default Home