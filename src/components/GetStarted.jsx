import React from 'react'
import styles from '../styles'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexStart} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] relative cursor-pointer ml-4`}>
        <div className={`${styles.flexCenter} flex-col bg-primary  w-[100%] h-[100%] rounded-full`} >
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>
                Get </span>
                
                 <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain inline-block' />
            </p>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>
                Started
              </span>
              
            </p>
        </div>
 
        

        
    </div>
  )
}

export default GetStarted