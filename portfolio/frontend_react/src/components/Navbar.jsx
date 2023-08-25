import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const [visible, setvisible] = useState(false);
  return (
    <nav style={{
      padding: '8px', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', width: '100%'
      , backdropFilter: blur('4px'), WebkitBackdropFilter: blur('4px'),
      border: '1px solid rgba(255,255,255,0.18)', position: 'fixed'
    }}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul style={{ listStyle: 'none', display: 'flex', fontSize: '17px' }}>
          {['home', 'about', 'skills', 'contact'].map((option) => {
            return <li key={`link-${option}`} style={{ margin: '0 1rem' }}>
              <a href={`#${option}`} style={{
                color: 'black', textDecoration: 'none',
                textTransform: 'uppercase'
              }}>{option}</a>
            </li>
          })}
        </ul>
      </div>
      <div>
        <HiMenuAlt4 onClick={() => setvisible(true)} />

        {visible && (
          <motion.div
          whileInView={{x: [300,0]}}
          transition={{duration:0.85, ease:'easeOut'}}>
            <HiX onClick={() => setvisible(false)} />
            <ul style={{ listStyle: 'none', display: 'flex', fontSize: '17px' }}>
              {['home', 'about', 'skills', 'contact'].map((option) => {
                return <li key={`link-${option}`} style={{ margin: '0 1rem' }}>
                  <a href={option} style={{
                    color: 'black', textDecoration: 'none',
                    textTransform: 'uppercase'
                  }} onClick={() => setvisible(false)}>{option}</a>
                </li>
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
