import React ,{useEffect, useState ,useRef}from 'react';
import HomeIcon from '@mui/icons-material/Home';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './Featured.module.scss';
import cx from 'classnames';
import {images} from '../../assets/images';
import PersonIcon from '@mui/icons-material/Person';
import WifiIcon from '@mui/icons-material/Wifi';
import Person from '@mui/icons-material/Person';
import Wifi from '@mui/icons-material/Wifi';
import ArrowForward from '@mui/icons-material/ArrowForward';
const tabConfig=[
    {label:'House',id:'house',icon:<HomeIcon/>},
    {label:'Villa',id:'villa',icon:<VillaIcon/>},
    {label:'Apartment',id:'apartment',icon:<ApartmentIcon/>},
]
const houseConfig=[
   {
    label:'Ikeja House,Lagos',
    id:'ikeja-lagos',
    price:200000,
    bedroom:3,
    interest:'31',
    rating:4.5,
    imgSrc:images.house1,
   },
   {
    label:'Lekki House,Lagos',
    id:'lekki-house',
    price:1240000,
    bedroom:4,
    interest:'31',
    rating:4.8,
    imgSrc:images.house2,
   },
   {
    label:'Picchu House,peru',
    id:'piccu-pru',
    price:95000,
    bedroom:3,
    interest:'31',
    rating:4,
    imgSrc:images.house3,
   },
   {
    label:'eja House,Lagos',
    id:'ikja-agos',
    price:2010000,
    bedroom:3,
    interest:'31',
    rating:3.5,
    imgSrc:images.house4,
   },   
   {
    label:'Ikeja,Lagos',
    id:'ikej-lgos',
    price:200000,
    bedroom:3,
    interest:'31',
    rating:4.5,
    imgSrc:images.house3,
   },
   {
    label:'Ika,Lagos',
    id:'ieja-los',
    price:100000,
    bedroom:3,
    interest:'31',
    rating:4.5,
    imgSrc:images.house1,
   }
];


function Featured() {
    const [currentTab,setCurrentTab] =useState();
    const [currentHouse,setHouse] =useState();
    const [activeArrow,setActiveArrow] =useState();

    const currentHouseRef =useRef()

    useEffect(()=>{
       setCurrentTab(tabConfig[0])
       setHouse(houseConfig[0])
       setActiveArrow('left')
    },[])
    useEffect(()=>{
        if(currentHouseRef.current){
         currentHouseRef.current.scrollIntoView({
             behavior:'smooth',
             block:'nearest',
             inline:'nearest',
         })
        }
     },[currentHouse])
    const handlePreviousHouse=()=>{
        if(currentHouse.id===houseConfig[0].id)
            return null 
        const currentIndex = houseConfig.findIndex(house=>
            house.id === currentHouse.id)
      if(currentIndex>0){
        setHouse(houseConfig[currentIndex-1])
      }   
      if(houseConfig[0]){
        setActiveArrow('left')
      }
    }
    const handleNextHouse=()=>{
        if(currentHouse.id===houseConfig[houseConfig.length-1].id)
            return null      
            const currentIndex = houseConfig.findIndex(house=>
                house.id === currentHouse.id)
          if(currentIndex< houseConfig.length-1){
            setHouse(houseConfig[currentIndex+1])
          }
          if(houseConfig[houseConfig.length-1]){
            setActiveArrow('right')
          }
            
        
    }
    const renderTab= (data) =>{
        const {label, id, icon} = data
        return(
            <div 
            key={id}
            className={cx(styles.tab,
                currentTab?.id === id ? styles.activeTab : ''
            )}
            onClick={()=>setCurrentTab(data)}>
                {icon}<span>{label}</span>
            </div>
        )

    }
    const renderBuilding=(data)=>{
        const {label,id,price,rating,imgSrc,bedroom,interest}=data;
        const check = currentHouse?.id===id
        return(
            <div key={id} className={cx(styles.building,
                check ? styles.activeBuilding:''
            )}
            ref={check ? currentHouseRef : null}
            onClick={()=>setHouse(data)}
            >
                <img src={imgSrc} alt={label} />
                <div className={styles.details}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.otherDetails}>
                        <div className={styles.section}>
                          <Person/>
                          <div className={styles.temp}>{bedroom}bedroom</div>
                        </div>
                        <div className={styles.section}>
                          <Wifi/>
                          <div className={styles.section}>WI-FI</div>
                        </div>
                    </div>
                </div>
                <div className={styles.price}>
                    <span>$</span>
                    {price}
                    <span>/annum</span>
                </div>
                <div className={styles.interest}>
                    {interest} have interset in this property
                </div>
                <button className={styles.viewMore}>
                    <div className={styles.section}>
                    <span>View More</span> 
                    { <ArrowForward/>}
                    </div>               
                </button>
            </div>
        )

    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.title}><span>Featured </span>Houses</div>
            <div className={styles.tabs}>{tabConfig.map(renderTab)}</div>
            <div className={styles.scrollButtons}>
                <KeyboardArrowLeftIcon className={cx(styles.right,
                activeArrow==='left'? styles.activeArrow:'')}
                onClick={handlePreviousHouse}/>
                <KeyboardArrowLeftIcon className={cx(styles.left,
                activeArrow==='right'? styles.activeArrow:'')}
                onClick={handleNextHouse}/>
            </div>
        </div>
        <div className={styles.houses}>
            {houseConfig.map(renderBuilding)}
        </div>
    </div>
  )
}

export default Featured