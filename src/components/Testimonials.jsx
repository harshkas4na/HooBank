import React from 'react'
import styles, { layout } from '../styles'
import { feedback } from '../constants'
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
    <section className={`${styles.paddingX} flex flex-col `}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/> saying about us</h2>
        <div className='w-full md:mt-0 mt-6'>
        <p className={`text-left max-w-[450px] ${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div className='flex sm:flex-row flex-col  items-center justify-center w-full feedback-conatiner relative z-[1] '>
            {feedback.map((card)=>(
              <FeedbackCard key={card.id} {...card}/>
            ))}
      </div>

    </section>
  )
}

export default Testimonials