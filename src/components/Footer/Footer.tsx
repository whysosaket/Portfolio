import "./Footer.scss"
import { socialIcons } from '../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>I am<span> Saket Aryan</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                <a href={socialIcon.url}> {socialIcon.icon} </a>
              </div>
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default Footer