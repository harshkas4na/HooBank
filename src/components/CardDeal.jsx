import React from 'react'
import styles, { layout } from '../styles'
import { card } from '../assets'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={`${styles.paddingX} ${layout.section}`}>
      <div className={layout.sectionInfo}>
          <h2 className={`max-w-[570px] max-h-[154px] ${styles.heading2}`}>Find a better card <br className='sm:block hidden'/>deal in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
          <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
      
    </section>
  )
}

export default CardDeal