import {stats} from '../constants'
import styles from '../styles'


const Stats = () =>(
    <section className={`${styles.flexCenter} w-full  py-6  flex-row flex-wrap sm:mb-20 mb-6 ml-9`}> 
        {stats.map((stat)=>(
          <div key={stat.id} className='flex flex-1 justify-start items-start m-3 flex-row '>
              <h4 className='text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[26px] leading-[21px]'>{stat.value}</h4>
              <p className='text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 '>{stat.title}</p>
          </div>
        ))}

    </section>
  )


export default Stats