import React from 'react'
import styles,{layout} from '../styles'
import { bill } from '../assets'

const Billing = () => {
  return (
    <section id='product' className={`${styles.paddingX} ${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className='max-w-[470px] max-h-[154px] text-white font-poppins font-semibold text-[48px] leading-[76.8px]'>Easily control your billing & invoicing.</h2>
        <p className='max-w-[470px] max-h-[154px] text-[#FFFFFFB2] font-poppins font-normal text-[18px] leading-[28.8px]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      </div>
    </section>
  )
}

export default Billing