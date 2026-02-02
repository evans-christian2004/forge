import React from 'react'
import { motion, scale } from "motion/react"

const hero = () => {
  return (
    <motion.div className="flex items-center justify-between font-bold text-[12vw] px-10"
        initial={{
            
        }}
    >
        <h1>Christian</h1>
        <h1>Evans</h1>
    </motion.div>
 
  )
}

export default hero