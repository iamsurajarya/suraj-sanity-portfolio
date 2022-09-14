import React from 'react';
import { motion } from 'framer-motion'
import {images} from '../../constants'

const Header = () => {
  const scaleVariants = {whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition:{
      duration: 1,
      ease: "easeInOut"
    } 
  }}
  return (
    <div className='app_header app_flex' id='home'>
      <motion.div
        whileInView={{x:[-100, 0], opacity:[0, 1]}}
        transition = {{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>✋</span>
            <div style={{marginLeft:20}}>
               <p className="p-text">Hello I am</p>
               <h1 className="head-text">Suraj</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Develoepr</p>
          <p className="p-text">Using MERN Stack....</p> 
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0, 1]}}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"      
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img 
        whileInView={{opacity:[0, 1]}}
        transition = {{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile-cirlce"
        className="overlay_circle"              
        >
        </motion.img>
      </motion.div>

      
      <motion.div
        variant={scaleVariants}
        whileInView = {  scaleVariants.whileInView }
        className="app_header-circle"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index)=> (
           <div className='circle-cmp app__flex' key= {`circle-${index}`} >
              <img src={circle } alt="circle" />
           </div>    
        ))}
      </motion.div>


    </div>
  )
} 

export default Header