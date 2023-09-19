import styles from './styles'
import {Navbar,Hero,Stats,Business,Billing,CardDeal,CTA,Testimonials,Clients,Footer} from '../src/components'

const App=()=>{
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
    </div>

    <div className='{`bg-primary ${styles.flexStart}'>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div>
      <div>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
        
      </div>
    </div>




  </div>


}


export default App;